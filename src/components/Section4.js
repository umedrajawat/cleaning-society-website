import React from 'react';
import '../allstyles/section4.css';
import Titlelist from './Titlelist';

// sec4 component
export default function Section4(props) {
    return (
        <div className="sec4-container">
            {/*  */}
            <div className="sec4-container-1">
                <p>Check out Some of our Services</p>
            </div>
            <div className="sec4-container2">
                <div className="sec4-container2-1"></div>
                <div className="sec4-container2-2">
                    {/* using titlelist component list datat is passed for ivingroom*/}
               <Titlelist listData={props.listData.livingRoomData}/></div>
                <div className="sec4-container2-3">
                    {/* using titlelist component list datat is passed for kitchen */}
                <Titlelist listData={props.listData.kitchenData}/>
                </div>
                <div className="sec4-container2-4"></div>

            </div>
        </div>
    )
}
