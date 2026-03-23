import { useCreateQuery } from "@/data";

export const useGetHeadings = useCreateQuery({
  key: 'headings',
  endpoint: 'configs/headings'
})