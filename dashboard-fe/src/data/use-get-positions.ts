import { useCreateQuery } from "@/data";

export const useGetPositions = useCreateQuery({
  key: "positions",
  endpoint: "/position",
});
