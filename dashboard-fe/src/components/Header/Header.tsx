import clsx from "clsx";

export interface HeaderProps {
  headings: string[];
}

export const Header = ({ headings }: HeaderProps) => {
  return (
    <thead>
      <tr className="w-full border-b grid grid-cols-4">
        {headings.map((heading, index) => (
          <th
            key={heading}
            className={clsx("p-1 text-left", {
              "border-r": index !== headings.length - 1,
            })}
          >
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
};
