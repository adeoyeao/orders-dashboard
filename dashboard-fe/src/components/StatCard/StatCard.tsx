import type { KeyValue } from "@/types";

export interface StatCardProps {
  stat: KeyValue;
}

export const StatCard = ({ stat }: StatCardProps) => {
  return (
    <div className="flex flex-col gap-2 h-full w-full justify-between p-4">
      <p className="text-md">{stat.key}</p>
      <p className="text-8xl font-semibold">{stat.value}</p>
    </div>
  );
};
