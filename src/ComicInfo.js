import React from "react";
import "./stylesheets/ComicInfo.css";

function ComicInfo(props) {
  return (
    <>
      <h1>{props.comicData.title}</h1>
      <h2>
        XKCD #{props.comicData.num}: {props.comicData.month}/
        {props.comicData.year}
      </h2>
    </>
  );
}

export default ComicInfo;
