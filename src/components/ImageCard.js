import React from 'react'
// this components contains an img and data and has an attached onClick listener to it
export default function ImageCard(props) {
    return (
        <div className="imgcard" onClick={props.onClick}>
            <img src={props.imgdata.img}></img>
            <p>{props.imgdata.data}</p>
        </div>
    )
}
