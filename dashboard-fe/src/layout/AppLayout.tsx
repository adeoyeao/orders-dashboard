import { type ReactNode } from "react";

export interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <main className="h-screen w-screen bg-neutral-800 text-white grid grid-cols-5 grid-rows-[1fr_3fr]">
      {children}
    </main>
  );
};
