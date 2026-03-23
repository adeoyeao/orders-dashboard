import { Table } from "@/components";
import { useGetHeadings, useGetPositions } from "@/data";
import { useGetHeight } from "@/hooks";
import { useRef } from 'react'

export const PositionGrid = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const {
    data: headingsData,
    isLoading: isHeadingsLoading,
    isError: isHeadingsError,
  } = useGetHeadings();
  const {
    data: tableData,
    isLoading: isTableDataLoading,
    isError: isTableDataError
  } = useGetPositions()
  const { height } = useGetHeight(sectionRef.current)

  return (
    <section className="w-full col-span-4 h-full" ref={sectionRef}>
      {(isHeadingsLoading || isTableDataLoading) ? (
        <div>Loading...</div>
      ) : (isHeadingsError || isTableDataError) ? (
        <div>Failed to fetch data</div>
      ) : (
        <Table headings={headingsData as string[]} tableData={tableData as {[x: string]: number | string}[]} primaryKey="Company" height={height}/>
      )}
    </section>
  );
};
