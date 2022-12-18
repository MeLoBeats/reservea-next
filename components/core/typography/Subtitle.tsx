import React, { ReactNode } from "react";

import styles from "@/styles/modules/typography.module.scss";

type Props = {
  children: ReactNode;
  as?: string;
  className?: string;
};

function Subtitle({ children, as, className = "" }: Props) {
  const Tag: any = `${as ? as : "h3"}`;
  return <Tag className={`${styles.subtitle} ${className}`}>{children}</Tag>;
}

export default Subtitle;
