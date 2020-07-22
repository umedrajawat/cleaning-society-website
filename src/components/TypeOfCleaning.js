import React from 'react'
import DisplayCard from './DisplayCard'

export default function TextInfo(props) {
    return (
        // displays textinfo 
        <div className="type">
        <p> {props.txtCard.title}</p> 
        </div>
    )
}
