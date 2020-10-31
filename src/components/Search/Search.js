import React from "react";
import { useFetch, useInc } from "../../hooks";
import { useLocation } from "react-router-dom";
import Curated from "../Home/Curated";
import "../Photos/photo.css";

export default function Photos() {
  const query = useLocation().state.query;
  const [page, { inc, dec }] = useInc({
    maxValue: 20,
    minValue: 1,
    initial: 1,
    step: 1,
  });
  const [status, data] = useFetch(
    `https://api.pexels.com/v1/search/?page=${page}&per_page=30&query=${query}`
  );

  return (
    <div className="photos">
      {status === "fetched" && (
        <div className="photo-container">
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
      {page === 1 && <button onClick={inc}>Next Page</button>}
      {page > 1 && (
        <>
          <button onClick={dec}>Prev Page</button>
          <button onClick={inc}>Next Page</button>
        </>
      )}
    </div>
  );
}
