import { useRouter } from "next/router";
import React from "react";

interface Navbar {
  id: string;
  label: string;
}

export const useNavbar = () => {
  const router = useRouter();

  const category = React.useMemo(() => {
    if (!router.query.category) return "top";

    return router.query.category;
  }, [router.query.category]);

  const navs = React.useMemo(() => {
    return [
      {
        id: "top",
        label: "Top Games",
      },
      {
        id: "new",
        label: "New Games",
      },
      {
        id: "slots",
        label: "Slots",
      },
      {
        id: "jackpot",
        label: "Jackpots",
      },
      {
        id: "live",
        label: "Live",
      },
      {
        id: "blackjack",
        label: "Blackjack",
      },
      {
        id: "roulette",
        label: "Roulette",
      },
      {
        id: "classic",
        label: "Table",
      },
      {
        id: "poker",
        label: "Poker",
      },
      {
        id: "other",
        label: "Other",
      },
    ] as Navbar[];
  }, []);

  const handleClick = React.useCallback(
    (nav: Navbar) => {
      console.log(nav);

      router.push({
        pathname: router.pathname,
        query: { ...router.query, category: nav.id },
      });
    },
    [router]
  );

  return { navs, handleClick, category };
};
