import { SIDE } from "@/constants";
import type { ListItemProps } from "@/types";
import clsx from "clsx";

export const ListItem = ({company, side, sector, orderQty}: ListItemProps) => {
  return <div className='p-2 grid grid-cols-[auto_2fr_1fr] gap-2'>
    <div className='rounded-full w-6 h-6 flex items-center justify-center'>
      {sector[0]}
    </div>
    <div className='flex flex-cols gap-1'>
      <p>{company}</p>
      <p>{side}</p>
    </div>
    <p className={clsx({
      'text-red-500': side === SIDE.SELL,
      'text-green-500': side === SIDE.BUY
    })}>{orderQty}</p>
  </div>
}