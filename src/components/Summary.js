import React from 'react'
import SummaryTitle from './SummaryTitle'
import StaticData from './StaticData'

export default function Summary(props) {
    return (
        //contains all components required for summary section
        <div className="summary">
            <div className="sumTit">
           <SummaryTitle/>  
           </div>          
            <div>
               <StaticData static={props.static}/>
            </div>
        </div>
    )
}
