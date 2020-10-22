import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  return <main className="flex-1">{children}</main>;
};

export default Main;
