import React from 'react'
import Avatar from "@material-ui/core/avatar";
import "./VideoRow.css"

function VideoRow({image,title,channel,views,timestamp}) {
    return (
        <div className="videorow">
            <img src={image} alt=""/>
            <div className="videorow__title">
                <h2>{title}</h2>
                <p>{views} . {timestamp}</p>
                <div className="videorow__avatar">
                    <Avatar className="videorow__avatar2"/>
                    <p>{channel}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoRow
