import React from 'react';
import LiElement from './LiElement';
import '../allstyles/nav.css'

// iterates the list and calls LiElement component to display datat as list item
export default function NavList(props) {
    return (
        <nav>
            <ul >
                {props.listData.data.map((value,index)=>{
                    return <LiElement stringVal={value}/>
                })}
            </ul>
        </nav>
    )
}
