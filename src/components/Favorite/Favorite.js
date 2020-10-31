import React from "react";
import FavoriteComponent from "../Favorite/FavoriteComponent";

export default function Photos() {
  const validate = (value) => {
    if (parseInt(value)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="favorites-outer">
      <div className="favorites-container">
        {console.log(validate(Object.values(window.localStorage)[0]))}
        {Object.values(window.localStorage).map((value, i) => {
          if (validate(value)) {
            return <FavoriteComponent id={value} value={value} key={i} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
