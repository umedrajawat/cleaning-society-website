import React from 'react'
import AddMinus from './AddMinus'

//cards to display text inside cards
export default function Cards(props) {
    return (
       <div className="Cards" onClick={props.prefclick}> 
            <p>{props.stringVal}</p> 
            </div>    
      
    )
}
