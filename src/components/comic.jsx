import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Comic() {
  const [comic, setComic] = useState("");

  // function to hit server, returning a random comic
  const getImage = () => {
    axios
      .get("http://localhost:8000/comic",
        { headers: { "Access-Control-Allow-Origin": "true" } })
      .then(({ data }) => setComic(data.img))
      .catch((err) => console.log(err))
  }

  // on page load
  useEffect(() => {
    getImage();
  }, []);

  return (
    <section>
      <div className="comic-text">
        <p>random xkcd comic:</p>
        <button onClick={() => getImage()}>new comic</button>
      </div>
      <img src={comic} className="comic" />
    </section>
  )
}