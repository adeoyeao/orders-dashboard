import { useStableArray } from "@/hooks";
import type { Position } from "@/types";
import { useMemo } from "react";
import { useGetPositions } from "./use-get-positions";

export const useGetRows = () => {
  const { data } = useGetPositions()();
  const positions = (data as Position[] | undefined) ?? [];

  const rows = useMemo(
    () => positions.map((item) => item.company),
    [positions],
  );

  const stableRows = useStableArray(rows);

  return stableRows;
};
