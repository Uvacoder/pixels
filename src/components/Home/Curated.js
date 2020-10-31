import React from "react";

export default function Curated(props) {
  const h = props.height / 12;
  const w = props.width / 12;
  const url = `url(${props.url.large})`;

  const download = (e) => {
    const a = document.createElement("a");
    a.href = props.url.original;
    a.download = props.url.original;
    a.style.display = "none";
    a.click();
    a.remove();
  };

  const favorite = () => {
    window.localStorage.setItem(props.id, props.id);
  };

  return (
    <div
      style={{
        height: h,
        width: w,
        backgroundImage: url,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="curated"
    >
      <h4>{props.photographer}</h4>
      <span>
        <i onClick={favorite} className="fas fa-star"></i>
        <a onClick={download} href={props.url.original}>
          <i className="fas fa-download"></i>
        </a>
      </span>
    </div>
  );
}
