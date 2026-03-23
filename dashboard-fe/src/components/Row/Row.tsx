import clsx from 'clsx'

export interface RowProps {
  headings: string[];
  data: { [x: string]: string | number };
}

export const Row = ({ headings, data }: RowProps) => {
  return (
    <tr className="w-full border-b grid grid-cols-4">
      {headings.map((heading, index) => (
        <td
          key={heading}
          className={clsx("p-1 text-left", {
            "border-r": index !== headings.length - 1,
          })}
        >
          {data[heading]}
        </td>
      ))}
    </tr>
  );
};
