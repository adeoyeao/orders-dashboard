import { useQueryClient } from "@tanstack/react-query";
import { useCreateQuery } from "./use-create-query";
import { getSocket } from "./use-get-socket";
import type { Order } from "@/types";
import { useCallback, useEffect } from "react";

interface OrdersMessage {
  sender: string;
  message: Order;
  timestamp: number;
}

export const useGetOrders = () => {
  const QUERY_KEY = 'orders'
  const queryClient = useQueryClient();
  const socket = getSocket('http://localhost:3001');

  const query = useCreateQuery({
    key: QUERY_KEY,
    endpoint: "/orders",
  });

  const handleMessage = useCallback((data: OrdersMessage) => {
    queryClient.setQueryData<Order[]>(
      [QUERY_KEY, {}],
      (prev = []) => [{...data.message }, ...prev]
    )
  }, [queryClient])

  useEffect(() => {
    socket.on('order', handleMessage)

    return () => {
      socket.off('order', handleMessage)
    }
  }, [handleMessage])

  return query
};
