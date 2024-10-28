import { Navbar } from "@/hooks/useNavbar";
import React from "react";

interface Props {
  handleClick: (nav: Navbar) => void;
  nav: Navbar;
  category: string;
}

export const NavbarItem = ({ handleClick, nav, category }: Props) => {
  return (
    <div
      onClick={() => handleClick(nav)}
      className={`item ${category === nav.id && "active"}`}
    >
      {nav.label}
    </div>
  );
};
