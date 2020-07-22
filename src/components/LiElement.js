import React from 'react'
import '../allstyles/nav.css'
// displays props as a list item
export default function LiElement(props) {
    return (
      <li>{props.stringVal}</li>
    )
}
