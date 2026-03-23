import { StatCard } from "@/components";

export const Statistics = () => {
  const DUMMY_DATA = [
    { key: "A", value: "100" },
    { key: "B", value: "100" },
    { key: "C", value: "100" },
    { key: "D", value: "100" },
  ];
  return (
    <section className="border-b col-span-4 flex h-full w-full">
      {DUMMY_DATA.map((stat) => (
        <StatCard stat={stat} key={stat.key} />
      ))}
    </section>
  );
};
