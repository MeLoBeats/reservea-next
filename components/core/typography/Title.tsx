import { ReactNode } from "react";

import styles from "@/styles/modules/typography.module.scss";

type Props = {
  children: ReactNode;
};

function Title({ children }: Props) {
  return <h1 className={styles.title}>{children}</h1>;
}

export default Title;
