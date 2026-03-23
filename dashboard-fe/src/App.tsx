import { AppLayout } from "@/layout";
import { Alerts, PositionGrid, Statistics, Toolbar } from "@/features";

export const App = () => {
  return (
    <AppLayout>
      <Toolbar />
      <Statistics />
      <Alerts />
      <PositionGrid />
    </AppLayout>
  );
};
