import { useGetCellData } from "@/data";
import type { Position } from "@/types";
import clsx from "clsx";

export interface CellProps {
  rowIndex: number;
  field: keyof Position;
  isLast?: boolean;
}

export const Cell = ({ rowIndex, field, isLast = false }: CellProps) => {
  const value = useGetCellData({ rowIndex, field });

  return (
    <td
      className={clsx("p-1 text-left", {
        "border-r": !isLast,
      })}
    >
      {value}
    </td>
  );
};
