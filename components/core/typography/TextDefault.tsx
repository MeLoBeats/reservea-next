import { ReactNode } from "react";

import styles from "@/styles/modules/typography.module.scss";

type Props = {
  children: ReactNode;
};

function Title({ children }: Props) {
  return <p className={styles.text}>{children}</p>;
}

export default Title;
