import React from 'react'
import Cards from './Cards'

// this will reuse card and display no. of cards by traversing props
export default function DisplayCard(props) {
    return (
        <div className="displayCard" onClick={props.onClick}>   
            {props.card1.map((value,index)=>{
                return <Cards stringVal={value} onClick={props.prefclick}/>
            })}
            
        </div>
   
    )
}
