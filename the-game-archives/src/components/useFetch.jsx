import React, { useEffect } from "react";
import fetchJsonp from "fetch-jsonp";

export default function useFetch(title) {
  useEffect(
    () =>
      fetchJsonp(
        `https://www.giantbomb.com/api/search/?api_key=7990d56160d3c7efeb2637a113ffd40a40c023cd&format=jsonp&query=${title}&resources=game`,
        { jsonpCallback: "json_callback" }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data.results);
        }),
    [title]
  );
  return <div></div>;
}
