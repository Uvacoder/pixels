import React from "react";
import { useFetch } from "../../hooks";
import "./home.css";
import Curated from "./Curated";

export default function Home() {
  const [status, data] = useFetch(
    "https://api.pexels.com/v1/curated?per_page=20"
  );

  return (
    <div className="home">
      <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
        }}
        className="hero-container"
      >
        <h1>
          The best free stock photos & videos shared by talented creators.
        </h1>
      </div>
      {status === "fetched" && (
        <div className="curated-photos">
          {data.photos.map((photo, i) => (
            <Curated
              key={i}
              width={photo.width}
              height={photo.height}
              url={photo.src}
              photographer={photo.photographer}
              id={photo.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
