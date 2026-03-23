import type { Position } from "@/types";
import { useMemo } from "react";
import { useGetPositions } from "./use-get-positions";

export interface UseGetCellDataProps {
  rowIndex: number;
  field: keyof Position;
}

export const useGetCellData = ({
  rowIndex,
  field,
}: UseGetCellDataProps): string | number => {
  const { data } = useGetPositions()();
  const positions = (data as Position[] | undefined) ?? [];

  return useMemo(
    () => positions[rowIndex]?.[field] ?? "",
    [positions, rowIndex, field],
  );
};
