import { SIDE } from "@/constants";
import type { ListItemProps } from "@/types";
import clsx from "clsx";

export const ListItem = ({ company, side, orderQty }: ListItemProps) => {
  return (
    <div className="p-2 grid grid-cols-[auto_2fr_1fr] gap-2 border border-neutral-700 items-center">
      <div
        className={clsx({
          "rounded-sm w-8 h-8 flex items-center justify-center text-sm": true,
          "bg-red-600": side === SIDE.SELL,
          "bg-green-600": side === SIDE.BUY,
        })}
      >
        {side}
      </div>
      <p>{company}</p>
      <p
        className={clsx("justify-self-end",{
          "text-red-600": side === SIDE.SELL,
          "text-green-600": side === SIDE.BUY,
        })}
      >
        {orderQty}
      </p>
    </div>
  );
};
