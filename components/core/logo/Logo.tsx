import React from "react";
import Title from "../typography/Title";

import styles from "@/styles/modules/logo.module.scss";
import homeIcon from "@/assets/icons/home_icon.svg";
import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className={styles.logo}>
      <Image src={homeIcon} height={20} width={20} alt="Home Icon" />
      <p>Reservea</p>
    </div>
  );
};

export default Logo;
