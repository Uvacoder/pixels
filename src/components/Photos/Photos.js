import React from "react";
import { useFetch, useInc } from "../../hooks";
import Curated from "../Home/Curated";
import "./photo.css";

export default function Photos() {
  const [page, { inc, dec }] = useInc({
    maxValue: 20,
    minValue: 1,
    initial: 1,
    step: 1,
  });
  const [status, data] = useFetch(
    `https://api.pexels.com/v1/curated/?page=${page}&per_page=30`
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
      <span className="btns">
        {page === 1 && <button onClick={inc}>Next Page</button>}
        {page > 1 && (
          <>
            <button onClick={dec}>Prev Page</button>
            <button onClick={inc}>Next Page</button>
          </>
        )}
      </span>
    </div>
  );
}
