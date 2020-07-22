import React from 'react';
import '../allstyles/section1.css'

// se tion1 component
export default function Section1(){
    return (
        <div className="section1-container">
            {/* 
             */}
            <div> 
                <div className="sec1-text">
                    <h1>Cleaning Made Easy</h1><br/>
                        <div className="sec1-text2">Book expert home cleaners and handymen at a moment
                    notice.Just<br /> pick a timeand we'll do the rest.</div>
                        <div className="container-form">
                            <form className="form1">
                                {/* form containing 2 inouts for email and xipcode */}
                                <input className="sec1-input1" type="email" name="email" placeholder="Email Address" ></input>  
                                <input className="sec1-input2"  type="text" name="zipcode" placeholder="Zip Code"></input>
                                <button>Continue</button>
                           </form>
                        </div>
                 </div>
            </div>
        </div>
    )
}
