import type { Position } from "@/types";
import { useGetPositions } from "./use-get-positions";
import { useMemo } from "react";

export const useGetStats = () => {
  const { data } = useGetPositions()() as { data: Position[] };

  const sectorData = useMemo(() => {
    if (!data) return {};
    return data?.reduce(
      (acc, { sector, orderQty }) => {
        if (acc[sector]) {
          acc[sector] = acc[sector] + orderQty;
        } else {
          acc[sector] = orderQty;
        }
        return acc;
      },
      {} as Record<string, number>,
    );
  }, [data]);

  const grossQty = useMemo(() => {
    return data.reduce((acc, cv) => {
      acc += Math.abs(cv.orderQty);
      return acc
    }, 0);
  }, [data]);

  const netQty = useMemo(() => {
    return data.reduce((acc, cv) => {
      acc += cv.orderQty;
      return acc
    }, 0);
  }, [data]);

  return {
    sectorData: Object.entries(sectorData).map(([key, value]) => ({
      key,
      value,
    })),
    grossQty,
    netQty,
  };
};
