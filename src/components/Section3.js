import React from 'react';
import '../allstyles/section3.css';

//component for section3
export default function Section3() {
    return (
        // sec3 container div
        <div className="sec3-container">
            {/*  */}
            <div className="sec3-container-1">
                <div className="sec3-container-2">
                    <h1 >Don't Take Our <span><u>Word</u></span>
                    </h1>
                    <h5>Read what our past customers said about our
                        cleaning and services</h5>
                    <div className="sec3-container-3">
                        {/* sec3-container-3 contains 3 div having quote symbol and text
                        along with it */}
                        <div className="sec3-part1">
                            <div className="sec3-part1-1">
                                <div><i class="fa fa-quote-left"></i></div>
                                <p>Maid services NYC is a wonderful
                                    service.I utilized their
                                    services to clean a one bedroom apartment.I aws staying in NYC after throwing a get
                                    together.THey were prompt,left the place spotless,and very professional.</p>
                            </div>
                        </div>
                        <div className="sec3-part2">
                            <div className="sec3-part2-1">
                                <div>
                                <div><i class="fa fa-quote-left"></i></div>
                                <p>I had them out to help me clean my
                                    new place for an office
                                    dinner i was having.I was very happy with the results.Jennifer came to the location
                                    on time.It is such a treat to have the home professionally cleaned.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="sec3-part3">
                            <div className="sec3-part3-1">
                                <div><i class="fa fa-quote-left"></i></div>
                                <p>They did such a great job.Whether you
                                    want to give a
                                    unique gift or have your own home cleaned.Maid for you provides a large range of
                                    top-notch services that I highly recommend to anyone.</p>
                            </div>
                        </div>
                        {/* each div has name in it */}
                        <div className="sec3-customer"><b>Sandra</b><br />Marketting Staff,New York</div>
                        <div className="sec3-customer" ><b>Jessica</b><br />Photographer,New York</div>
                        <div className="sec3-customer"><b>Samantha</b><br/>Physical Therapist,Manhattan</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
