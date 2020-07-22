import React from 'react';
import PreferenceTitle from './PreferenceTitle';
import '../allstyles/BookingSection.css'
import Summary from './Summary';
import TextInfo from './TypeOfCleaning';
import DisplayCard from './DisplayCard'
import StrongText from './StrongText';
import ImageCard from './ImageCard';
import AddMinus from './AddMinus';
import Textbox from './Textbox';
import formList from './FormList';
import BookingButton from './BookingButton';



export default function BookingSection(props) {
    return (
        
        <div className="booking-container">
            {/* Contains a booking container that has 2 components:
               1.Booking container-1
               2.booking suumary

            1.Booking-contaier1 contains all options for selecting for cleaning
            titles and place to provide user personal details
            2. booking summary contains static data and s fixed on left side 
            
            
            */}
            <div className="booking-container1">
                {/* showing titile */}
                <PreferenceTitle />
                <TextInfo txtCard={props.txt.txt1} />
               
                <DisplayCard card1={props.static.card1}  onClick={props.prefclick}/>
              
                <TextInfo txtCard={props.txt.txt2} />
                <DisplayCard card1={props.static.card2} onClick={props.prefclick}/>
                <StrongText strong={props.strong.txt1} />

                <div className="imageData1">
                    <ImageCard imgdata={props.imgdata.img1} onClick={props.prefclick} />
                    <ImageCard imgdata={props.imgdata.img2} onClick={props.prefclick}/>
                </div>
                <TextInfo txtCard={props.txt.txt3} />
                <div className="imgData2">
                    <ImageCard imgdata={props.imgdata1.img1} onClick={props.prefclick}/>
                    <ImageCard imgdata={props.imgdata1.img2} onClick={props.prefclick}/>
                    <ImageCard imgdata={props.imgdata1.img3} onClick={props.prefclick}/>
                    <ImageCard imgdata={props.imgdata1.img4} onClick={props.prefclick}/>
                </div>
                <TextInfo txtCard={props.txt.txt4} />
                <input type="textarea" style={{ height: '134px', marginBottom: '15px', display: 'grid', marginTop: '15px', width: '90%', marginLeft: '25px', marginRight: '15px' }} />
                <StrongText strong={props.strong.txt2} />
                <div className="selectTime">
                    <div>
                        <TextInfo txtCard={props.txt.txt5} />
                        <AddMinus/>
                        <p id="pid">his is what we think the best based on your preferences.<br/>  Feel free to change it if you want.</p>
                    </div>
                    <div>
                        <TextInfo txtCard={props.txt.txt6} />
                        <input type="date"/>             
                    </div>
                </div>
                <TextInfo txtCard={props.txt.txt7} />
                <DisplayCard card1={props.static.card3}  onClick={props.prefclick} />
                <StrongText strong={props.strong.txt3} />
                <TextInfo txtCard={props.txt.txt8}/>
                {/* <input type="text" placeholder="Card number"/> */}
                <Textbox/>
                <div className="form2">
                <input className="f" type="text" placeholder="MM/YY"/> 
                <input className="f" type="text" placeholder="CVV"/> 
                <input className="f" type="text" placeholder="Card Holder Name"/> 
                {/* <formList bank={props.bank}/> */}
                </div>
                <TextInfo txtCard={props.txt.txt9} />
                <div className="form3"> 
                <input className="f" type="text" placeholder="Email Address"/> 
                <input className="f" type="text" placeholder="Phone no."/> 
                <input className="f" type="text" placeholder="Full Address"/> 
                <input  className="f"type="text" placeholder="PIN"/> 
                </div>
                <form className="form4">
                    <div>
                <input type="checkbox" name="check" value="check"/> Check this custom checkbox
                   </div>
                   <div>
                <input type="checkbox" name="read" value="read"/>I read and agree to the terms & conditions.
               </div>
                </form>
                <BookingButton/>

            </div>
            <div className="Boking-container2">
                <Summary static={props.static} />
            </div>
        </div>
        
    )
}
