import React from 'react';
import LiElement from './LiElement'

export default function StaticData(props) {
    return (    
       <nav>
           <ul>
               {/* used to display data passed as props for summary section as list */}
                {props.static.summary.map((value,index)=>{
                    return <LiElement stringVal={value}/>
                })}
            </ul>    
           
        </nav>  
            
        
    )
}
