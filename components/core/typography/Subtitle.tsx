import { ReactNode } from "react";

import styles from "@/styles/modules/typography.module.scss";

type Props = {
  children: ReactNode;
};

function Title({ children }: Props) {
  return <h3 className={styles.subtitle}>{children}</h3>;
}

export default Title;
