import { AppLayout } from "@/layout";
import { Alerts, PositionGrid, Statistics, Toolbar } from "@/features";
import { useSocket } from "@/data";

export const App = () => {
  useSocket(import.meta.env.VITE_ORDERS_WS)
  return (
    <AppLayout>
      <Toolbar />
      <Statistics />
      <Alerts />
      <PositionGrid />
    </AppLayout>
  );
};
