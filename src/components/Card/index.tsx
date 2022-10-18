import { ReactNode } from "react";
import { CardContainer } from "./styles";

export default function Card({ children }: { children: ReactNode }) {
  return <CardContainer>{children}</CardContainer>;
}
