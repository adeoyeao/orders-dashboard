import { Table } from "@/components";
import { useGetHeadings, useGetRows, useSocket } from "@/data";
import { useGetHeight } from "@/hooks";
import { useRef } from "react";

export const PositionGrid = () => {
  useSocket(import.meta.env.VITE_POSITIONS_WS);

  const sectionRef = useRef<HTMLElement>(null);
  const {
    data: headingsData,
    isLoading: isHeadingsLoading,
    isError: isHeadingsError,
  } = useGetHeadings();

  const { height } = useGetHeight(sectionRef.current);
  const rows = useGetRows();

  return (
    <section className="w-full col-span-4 h-full" ref={sectionRef}>
      {isHeadingsLoading ? (
        <div>Loading...</div>
      ) : isHeadingsError ? (
        <div>Failed to fetch data</div>
      ) : (
        <Table
          headings={headingsData as string[]}
          rows={rows}
          height={height}
        />
      )}
    </section>
  );
};
