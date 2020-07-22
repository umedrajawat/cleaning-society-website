import React from 'react';
import '../allstyles/section5.css'
import Footer from './Footer'
import Icon from './Icon'

export default function Section5() {
    return (
        <div>
            {/*component for section5  */}
            <div className="sec5-container">
                <div className="sec5-container1">
                    <div className="sec5-container1-1">
                        <h1><b>Dont wait,book a cleaning now.</b></h1>
                    </div>
                    <div className="sec5-container-2">Book expert home cleaners and
                    handymen at a moment's notice.Just pick<br />a time and we will do the rest</div>
                    <div className="sec5-container-3">
                        {/* form for email zipcoe and button */}
                        <form className="form1">
                            <input className="email" type="email" name="email" placeholder="Email Address"></input>
                            <input className="zipcode" type="number" name="zipcode" placeholder="Zip Code"></input>
                            <button className="btn1">Continue</button>
                        </form>
                    </div>
                </div>
                <div> 
                    {/* sec5-container2 contains multiple lists */}

                    <div className="sec5-container2">
                        <div>
                            <ul>
                                <h3>QUICK LINKS</h3>
                                <a>help</a>
                                <a>about</a>
                                <a>press</a>
                                <a>blog</a>
                                <a>contact us</a>


                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3>LEGAL STUFF</h3>
                                <a>terms of use</a>
                                <a>cookies</a>
                                <a>privacy policy</a>
                                <a>security policy</a>
                                <a>money back guarantee</a>

                            </ul>
                        </div>

                        <div>
                            <ul className="list3">
                                <h3>OUR LOCATIONS</h3>
                                <li>Boston</li>
                                <li>Chicago</li>
                                <li>LOndon</li>
                                <li>Los Angeles</li>
                                <li>New York</li>

                            </ul>
                        </div>

                        <div className ="sec5-container2-1">
                            <div className="sec5-container2-1-1">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="f-div"> 
                               {/* a form for email and button  */}
                            <form className="form2">
                                <input className="info-email" type="email" name="email" placeholder="Enter you email"></input>
                                <button className="btn2" >Go</button>
                            </form>
                            </div>
                            {/* icon component to display icons for social media */}
                              <Icon/>

                        </div>

                    </div>
                    
                </div>
                
            </div>
            <Footer/>

        </div>
    )
}
