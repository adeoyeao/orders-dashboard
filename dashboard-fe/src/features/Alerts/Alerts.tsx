import { List } from "@/components";
import { useGetOrders } from "@/data";
import type { Order } from "@/types";

export const Alerts = () => {
  const { data, isLoading, isError } = useGetOrders()();

  if (isError || !data) {
    return <div className="p-2 h-full w-full">Failed to load orders</div>;
  }

  if (isLoading) {
    return <div className="p-2 h-full w-full">Loading...</div>;
  }

  return (
    <section className="col-span-1 row-span-2 border-l">
      <List
        data={(data as Order[]).sort((a, b) =>
          b.timestamp > a.timestamp ? 1 : -1,
        )}
      />
    </section>
  );
};
