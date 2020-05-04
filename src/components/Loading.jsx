import React from "react";
import loadingArrow from "../images/gif/loading-arrow.gif";
function Loading() {
  return (
    <div>
      <div className="loading">
        <h4>Rooms data loading...</h4>
        <img src={loadingArrow} />
      </div>
    </div>
  );
}

export default Loading;
