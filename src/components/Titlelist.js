import React from 'react';
import LiElement from './LiElement';
import NavList from './NavList'

export default function Titlelist(props) {
    return (
        <div>
           <h3>{props.listData.title}<span>{props.listData.text}</span></h3>
            <NavList listData={props.listData}/>
        </div>
    )
}
