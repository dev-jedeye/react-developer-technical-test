import type { NextApiRequest, NextApiResponse } from "next";

export interface Games {
  categories: string[];
  name: string;
  image: string;
  id: string;
  amount: number | null;
}

export interface Jackpot {
  game: string;
  amount: number;
}

export const getJackpots = async () => {
  const url = "https://stage.whgstage.com/front-end-test/jackpots.php";
  const response = await fetch(url);

  return (await response.json()) as Jackpot[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const category = req.query.category as string | undefined;
    const url = "https://stage.whgstage.com/front-end-test/games.php";
    const response = await fetch(url);

    const result = (await response.json()) as Games[];
    let gameFiltered = result;

    if (!!category && category !== "jackpot" && category !== "other") {
      gameFiltered = result.filter((game) => {
        return game.categories.includes(category);
      });
    }

    if (category === "other") {
      gameFiltered = result.filter((game) => {
        return (
          game.categories.includes("ball") ||
          game.categories.includes("virtual") ||
          game.categories.includes("fun")
        );
      });
    }

    const jackspots = await getJackpots();

    if (category === "jackpot") {
      gameFiltered = result.filter((game) => {
        return jackspots.find((jack) => jack.game === game.id);
      });
    }

    if (!!jackspots && jackspots.length > 0) {
      gameFiltered = gameFiltered.map((item) => {
        return {
          ...item,
          amount:
            jackspots.find((jack) => jack.game === item.id)?.amount ?? null,
        };
      });
    }

    res.status(200).json(gameFiltered);
  } else {
    res.status(404).json({ message: "Not found" });
  }
}
