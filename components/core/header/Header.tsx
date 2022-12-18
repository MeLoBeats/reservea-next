import Image from "next/image";
import React from "react";
import Logo from "../logo/Logo";
import Subtitle from "../typography/Subtitle";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="navbar">
      <div className="brand">
        <Logo />
        <Subtitle as="h3">Explorer</Subtitle>
      </div>
      <ul className="links">
        <Subtitle as="li">Mes favoris</Subtitle>
        <Subtitle as="li">Mes réservation</Subtitle>
        <li>
          <Image
            src="https://avatars.githubusercontent.com/u/17836372?s=80&u=d33015746e317e389070e1e47b733936552ed5da&v=4"
            width={40}
            height={40}
            alt="Profile Icon"
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
