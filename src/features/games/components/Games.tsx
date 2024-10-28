import React from "react";
import { useGames } from "../hooks/useGames";
import Image from "next/image";

import imgJackpot from "@/assets/jackpot.png";

export const Games = () => {
  const { games, isLoading } = useGames();

  if (!!isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Games not available
      </div>
    );
  }

  return (
    <div className="gallery-container">
      {games.map((game, index) => (
        <div className="card" key={index}>
          {game.categories.includes("top") &&
            game.categories.includes("new") && (
              <span className="ribbon ribbon-new">NEW</span>
            )}
          {game.categories.includes("top") &&
            !game.categories.includes("new") && (
              <span className="ribbon ribbon-top">TOP</span>
            )}
          <Image
            src={convertImageUrl(game.image)}
            alt={game.id}
            layout="responsive"
            width={200}
            height={150}
            className="img"
          />
          <div className="card-content">
            <button type="button">Play: {game.name}</button>
          </div>
          {!!game.amount && (
            <div className="jackpot">
              <Image
                src={imgJackpot.src}
                alt={`jackpot-img-${index}`}
                width={20}
                height={20}
              />
              <p>{game.amount}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const convertImageUrl = (url: string) => {
  if (url.startsWith("//")) {
    return `https:${url}`;
  }

  return url;
};
