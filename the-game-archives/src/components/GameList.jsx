import React from "react";

export default function GameList({ games }) {
  return (
    <div className="gamelist-container">
      {games.map((game) => (
        <div className="gamelist-game" key={game.guid}>
          <img src={game.image.small_url} alt="" />
          <p>{game.name}</p>
        </div>
      ))}
    </div>
  );
}
