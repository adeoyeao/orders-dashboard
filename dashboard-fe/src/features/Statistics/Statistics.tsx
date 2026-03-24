import { BarChartHorizontal, StatCard } from "@/components";
import { useGetStats } from "@/data";

export const Statistics = () => {
  const { sectorData, grossQty, netQty } = useGetStats();
  return (
    <section className="border-b col-span-4 grid grid-cols-4 h-full w-full">
      <StatCard stat={{ key: "Gross Order Qty", value: grossQty.toString() }} />
      <StatCard stat={{ key: "Net Order Qty", value: netQty.toString() }} />
       <div className="p-4 w-full h-full col-span-2 ">
        <BarChartHorizontal data={sectorData} />
      </div>
    </section>
  );
};
