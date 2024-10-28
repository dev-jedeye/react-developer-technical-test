import { useNavbar } from "@/hooks/useNavbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { isDesktop } from "react-device-detect";

import React from "react";

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
            <div
              onClick={() => handleClick(nav)}
              className={`item ${category === nav.id && "active"}`}
              key={`${idx}-${nav.label}`}
            >
              {nav.label}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
