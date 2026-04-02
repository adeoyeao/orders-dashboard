import { AppLayout } from "@/layout";
import { Alerts, PositionGrid, Statistics } from "@/features";
import { useSocket } from "@/data";

export const App = () => {
  useSocket('http://localhost:3001');
  useSocket('http://localhost:3002');

  return (
    <AppLayout>
      <Statistics />
      <Alerts />
      <PositionGrid />
    </AppLayout>
  );
};
