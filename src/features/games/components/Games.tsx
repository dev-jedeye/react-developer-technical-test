import React from "react";
import { useGames } from "../hooks/useGames";
import { FullSreen } from "@/components/FullSreen";
import { GameCard } from "./GameCard";

export const Games = () => {
  const { games, isLoading } = useGames();

  if (!!isLoading) {
    return <FullSreen text="Loading..." />;
  }

  if (games.length === 0) {
    return <FullSreen text="Games not available" />;
  }

  return (
    <div className="gallery-container">
      {games.map((game, idx) => (
        <GameCard game={game} key={`${idx}-${game.id}`} />
      ))}
    </div>
  );
};
