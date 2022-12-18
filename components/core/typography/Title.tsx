import { ReactNode } from "react";

import styles from "@/styles/modules/typography.module.scss";

type Props = {
  children: ReactNode;
  props?: HTMLElement;
  className?: string;
};

function Title({ children, className }: Props) {
  return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
}

export default Title;
