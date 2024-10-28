import type { NextApiRequest, NextApiResponse } from "next";
import { Games } from ".";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const url = "https://stage.whgstage.com/front-end-test/games.php";
    const response = await fetch(url);

    const result = (await response.json()) as Games[];

    const categories: string[] = [];

    result.forEach((item) => {
      item.categories.forEach((cat) => {
        if (!categories.includes(cat)) {
          categories.push(cat);
        }
      });
    });

    res.status(200).json(categories);
  } else {
    res.status(404).json({ message: "Not found" });
  }
}
