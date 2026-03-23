import { getSocket, useCreateQuery } from "@/data";
import type { Position } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";

export interface PositionMessage {
  type: "add" | "edit";
  message: Position;
}

export const useGetPositions = () => {
  const QUERY_KEY = "positions";
  const queryClient = useQueryClient();
  const socket = getSocket(import.meta.env.VITE_POSITIONS_WS);
  const query = useCreateQuery({
    key: QUERY_KEY,
    endpoint: "/position",
  });

  const handleMessage = useCallback(
    (data: PositionMessage) => {
      queryClient.setQueryData<Position[]>([QUERY_KEY, {}], (prev = []) => {
        if (data.type === "add") {
          return [data.message, ...prev];
        }

        const positionCopy = [...prev];
        const positionIndex = positionCopy.findIndex(
          (item) => item.company === data.message.company,
        );

        if (positionIndex === -1) {
          return [data.message, ...positionCopy];
        }

        positionCopy.splice(positionIndex, 1, data.message);
        return positionCopy;
      });
    },
    [queryClient],
  );

  useEffect(() => {
    socket.on("position", handleMessage);

    return () => {
      socket.off("position", handleMessage);
    };
  }, [socket, handleMessage]);

  return query;
};
