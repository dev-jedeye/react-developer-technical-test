import { convertImageUrl } from "@/helpers/urlConvert";
import { Games } from "@/pages/api/games";
import Image from "next/image";
import React from "react";
import imgJackpot from "@/assets/jackpot.png";

interface Props {
  game: Games;
}

export const GameCard = ({ game }: Props) => {
  const isTop = game.categories.includes("top");
  const isNew = game.categories.includes("new");

  return (
    <div className="card">
      {isNew && <span className="ribbon ribbon-new">NEW</span>}
      {isTop && <span className="ribbon ribbon-top">TOP</span>}
      <Image
        src={convertImageUrl(game.image)}
        alt={game.id}
        layout="responsive"
        width={200}
        height={200}
        className="img"
      />
      <div className="card-content">
        <button type="button">Play: {game.name}</button>
      </div>
      {!!game.amount && (
        <div className="jackpot">
          <Image
            src={imgJackpot.src}
            alt={`jackpot-img-${game.id}`}
            width={20}
            height={20}
          />
          <p>{game.amount}</p>
        </div>
      )}
    </div>
  );
};
