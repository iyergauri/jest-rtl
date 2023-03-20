import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Comic() {
  const [comic, setComic] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8000/comic",
        { headers: { "Access-Control-Allow-Origin": "true" } })
      .then(({ data }) => setComic(data.img))
      .catch((err) => console.log(err))
  }, []);
  return (
    <section>
      <p>current xkcd comic:</p>
      <img src={comic} />
    </section>
  )
}