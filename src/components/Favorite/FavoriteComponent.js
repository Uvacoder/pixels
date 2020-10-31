import React from "react";
import { useFetch } from "../../hooks";
import "./favorite.css";

export default function Curated(props) {
  const [status, data] = useFetch(
    `https://api.pexels.com/v1/photos/${props.value}`
  );

  const download = (e) => {
    const a = document.createElement("a");
    a.href = data.src.original;
    a.download = data.src.original;
    a.style.display = "none";
    a.click();
    a.remove();
  };

  const unFavorite = (e) => {
    window.localStorage.removeItem(data.id);
    document.getElementById(data.id).remove();
  };

  return (
    <>
      {status === "fetched" && (
        <div
          id={data.id}
          style={{
            height: data.height / 12,
            width: data.width / 12,
            backgroundImage: `url(${data.src.large})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="fav-component"
        >
          <h4>{data.photographer}</h4>
          <span>
            <i onClick={unFavorite} className="fas fa-star"></i>
            <a onClick={download}>
              <i className="fas fa-download"></i>
            </a>
          </span>
        </div>
      )}
    </>
  );
}
