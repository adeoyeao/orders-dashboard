import type { ListItemProps } from "@/types"
import { ListItem } from "../ListItem"

export interface ListProps {
  data?: ListItemProps[]
}

export const List = ({data}: ListProps) => {
  if (!data || !data.length) {
    return <div className='flex items-center justify-center p-3 h-full'>No items available...</div>
  }
  return data.map((listItem) => (
    <ListItem key={listItem.id} {...listItem} />
  ))
}