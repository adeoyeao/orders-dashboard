import { Table } from "@/components";
import { useGetHeadings, useGetPositions, useGetRows, useSocket } from "@/data";
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
  const {
    isLoading: isTableDataLoading,
    isError: isTableDataError,
  } = useGetPositions()();
  const { height } = useGetHeight(sectionRef.current);
  const rows = useGetRows();

  return (
    <section className="w-full col-span-4 h-full" ref={sectionRef}>
      {isHeadingsLoading || isTableDataLoading ? (
        <div>Loading...</div>
      ) : isHeadingsError || isTableDataError ? (
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
