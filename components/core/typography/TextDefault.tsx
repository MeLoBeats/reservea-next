import { ReactNode } from "react";

import styles from "@/styles/modules/typography.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
};

function Text({ children, className }: Props) {
  return <p className={`${styles.text} ${className}`}>{children}</p>;
}

export default Text;
