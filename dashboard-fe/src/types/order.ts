import type { SideType } from "@/constants";

export interface Order {
  id: string;
  company: string;
  sector: string;
  orderQty: number;
  side: SideType;
  timestamp: number;
}
