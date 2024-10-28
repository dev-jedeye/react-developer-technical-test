import { useNavbar } from "@/hooks/useNavbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { isDesktop } from "react-device-detect";

import React from "react";
import { NavbarItem } from "./NavbarItem";

export const Navbar = () => {
  const { navs, category, handleClick } = useNavbar();
  const [isShow, setShow] = React.useState<boolean>(false);

  return (
    <nav className="navbar-wrapper">
      {!isDesktop && (
        <div className="navbar-mobile-header">
          <p>GAMES</p>
          <span>
            <GiHamburgerMenu
              size={20}
              onClick={() => setShow((prev) => !prev)}
            />
          </span>
        </div>
      )}
      <div className={`${!isDesktop && !isShow && "hidden"}`}>
        <div className="navbar">
          {navs.map((nav, idx) => (
            <NavbarItem
              key={`${idx}-${nav.label}`}
              category={category}
              handleClick={handleClick}
              nav={nav}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};
