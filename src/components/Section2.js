import React from 'react';
import '../allstyles/section2.css'

// component for section2
export default function Section2() {
    return (
        <div className="section2-container">
            {/*  */}
            <h1 id="hh">How it <span><u>works</u></span>
            </h1>
            <p>We've made all the hardwork for making it possible for you</p>
            <div className="sec2-div">
                {/* contains 3 div havin image and text within it */}
                <div className="a">
                    <div class="item2">
                        <i class="fa fa-calendar" ></i></div>
                    <div class="item4"><b>Book a cleaning</b><br />click the book now button to make a booking on<br />on
                    your preferred date and time</div>
                </div>
                <div className="b">
                    <div class="item3"><i class="fa fa-lock"></i></div>
                    <div class="item5"><b>Confirm Booking</b><br />We will confirm your booking along with your instructions
                        via
                    secure transaction.</div>
                </div>
                <div className="c">
                    <div class="item1"><i class="fa fa-home" ></i></div>

                    <div class="item6"><b>We'll clean it</b><br />Our trusted and experienced maid will come at
                    your<br />doorstrep on the time for cleaning</div>

                </div>


            </div>
        </div>
    )
}
