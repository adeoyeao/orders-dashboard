import { Header } from "../Header";
import { Row } from "../Row";

export interface TableProps {
  headings: string[];
  rows: string[];
  height?: number;
}

export const Table = ({ headings, rows, height = 500 }: TableProps) => {
  return (
    <table className="grid grid-rows-[auto_1fr] h-full" style={{ height }}>
      <Header headings={headings} />
      <tbody className="overflow-y-scroll">
        {rows.map((row, index) => (
          <Row headings={headings} key={`${row}-${index}`} rowIndex={index} />
        ))}
      </tbody>
    </table>
  );
};
