import type { SideType } from "@/constants";

export interface ListItemProps {
  id: string;
  company: string;
  side: SideType;
  sector: string;
  orderQty: number
}