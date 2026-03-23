import { Header } from "../Header";
import { Row } from "../Row";

export interface TableProps {
  headings: string[];
  tableData: { [x: string]: string | number }[];
  primaryKey: string;
  height?: number
}

export const Table = ({ headings, tableData, primaryKey, height = 500 }: TableProps) => {
  return (
    <table className="grid grid-rows-[auto_1fr] h-full" style={{height}}>
      <Header headings={headings} />
      <tbody className='overflow-y-scroll'>
        {tableData.map((data) => (
          <Row data={data} headings={headings} key={data[primaryKey]}/>
        ))}
      </tbody>
    </table>
  );
};
