import React from "react";
import Avatar from "@material-ui/core/avatar";
import "./Video.css"

function Video({ image, title, channel, views, timestamp ,channelImage}) {
  return (
    <div className="video">
      <img src={image} alt="" className="video__thumbnail"/>
      <div className="video__info">
        <Avatar className="video__avatar" alt={channel} src={channelImage} />
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
