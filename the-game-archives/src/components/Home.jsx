import React, { useEffect, useState } from "react";
import fetchJsonp from "fetch-jsonp";
import search from "../assets/search.png";
import useFetch from "./useFetch";
import GameList from "./GameList";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [games, setGames] = useState(null);

  function searchGame(title) {
    fetchJsonp(
      `https://www.giantbomb.com/api/search/?api_key=7990d56160d3c7efeb2637a113ffd40a40c023cd&format=jsonp&query=${title}&resources=game`,
      { jsonpCallback: "json_callback" }
    )
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setGames(resData.results);
        console.log({ games });
      });
  }

  useEffect(() => {
    searchGame("Uncharted");
  }, []);

  return (
    <div className="home">
      {/* SEARCH */}
      <div className="home-search">
        <input
          placeholder="Search your game"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={search}
          onClick={() => {
            searchGame(searchTerm);
          }}
        />
      </div>

      {/* CONTAINER */}
      {games?.length > 0 ? (
        <div className="container">
          <GameList games={games}></GameList>
        </div>
      ) : (
        <div className="empty">
          <h2>No Games found</h2>
        </div>
      )}
    </div>
  );
}
