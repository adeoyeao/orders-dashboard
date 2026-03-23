import { camelCase } from "lodash";
import type { Position } from "@/types";
import { Cell } from "../Cell";

export interface RowProps {
  headings: string[];
  rowIndex: number;
}

export const Row = ({ headings, rowIndex }: RowProps) => {
  return (
    <tr className="w-full border-b grid grid-cols-4">
      {headings.map((heading, index) => (
        <Cell
          key={`${heading}-${rowIndex}-${index}`}
          isLast={index === headings.length - 1}
          rowIndex={rowIndex}
          field={camelCase(heading) as keyof Position}
        />
      ))}
    </tr>
  );
};
