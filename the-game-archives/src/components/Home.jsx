import React, { useEffect } from "react";
import fetchJsonp from "fetch-jsonp";

export default function Home() {
  useEffect(() => {
    const title = 'The Last Of Us';
    const id = "3025-3728";
    fetchJsonp(
      `https://www.giantbomb.com/api/game/3025-3728/?api_key=7990d56160d3c7efeb2637a113ffd40a40c023cd&format=jsonp`,
      { jsonpCallback: 'json_callback' }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div>Home</div>;
}
