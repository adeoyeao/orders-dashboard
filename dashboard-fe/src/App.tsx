import { AppLayout } from "@/layout";
import { Alerts, PositionGrid, Statistics } from "@/features";
import { useSocket } from "@/data";

export const App = () => {
  useSocket(import.meta.env.VITE_ORDERS_WS);
  useSocket(import.meta.env.VITE_POSITIONS_WS);

  return (
    <AppLayout>
      <Statistics />
      <Alerts />
      <PositionGrid />
    </AppLayout>
  );
};
