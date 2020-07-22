import React from 'react'
import Header1 from './Header1';
import Title from './Title';
import BookingSection from './BookingSection';
import doublebed from '../images/doublebed.svg';
import shower from '../images/shower.svg';
import fridgeicon from '../images/fridgeicon.svg';
import ovenicon from '../images/ovenicon.svg';
import ironicon  from '../images/ironicon.svg';
import windowicon from '../images/windowicon.svg';
import '../allstyles/bookingPage.css'

// handles booking page
export default function Booking() {

//onclick method to change color of div on click of it
    const cardonClick=(e)=>{
        const cards=e.target;
        if(cards.style.color=="rgb(16, 177, 231)"){
            cards.style.color="black";
            cards.style.borderColor="#8B9AAC"
        }
        else{
            cards.style.color="#10B1E7";
            cards.style.borderColor="#10B1E7";
        }
    }
    
    // passing data as props
    const data={
        summary:[
            "Standard Cleaning",
            "Tues. 12/31/2016 @ 9:00 AM",
            "4 hours",
            "One time",
            "1650 Broadway Apt. 23B New York, NY 10023",
        ],
        card1:[
            "Standard",
            "Deep",
            "Move In/Out",

        ],
        card2:[
            "One time",
            "Weekly",
            "Bi-Monthly",
            "Monthly"
        ],
        card3:[
            "7:00 AM",
            "9:00 AM",
            "11:00 AM",
            "1:00 PM",
            "3:00 PM",
            "5:00 PM",
            "7:00 PM",
            "9:00 PM",
        ]

    }
    const txt={
        txt1:{
            "title":"What type of cleaning?"         
        },
        txt2:{
            "title":"How often would you like cleaning?"
        },
        txt3:{
            "title":"Need any extras?"
        },
        txt4:{
            "title":"Do you have any special requerments? (optional)"
        },
        txt5:{
            "title":"How many hours?"
        },
        txt6:{
            "title":"Choose a Date"
        },
        txt7:{
            "title":"When do you like to start?"
        },
        txt8:{
            "title":"Payment Method"
        },
        txt9:{
            "title":"Personal Details"},
    }

    const strong={
        txt1:{
            "title":"Tell us about your home"
        },
        txt2:{
            "title":"Choose hours and dates"
        },
        txt3:{
            "title":"Payment Method"
        },
      
    }

    const imgData={
        img1:{
            "img":doublebed,
            "data":"BEDROOMS"
        },
        img2:{
            "img":shower,
            "data":"BATHROOMS",
        }
    }
    const imgData1={
        img1:{
            "img":ironicon,
            "data":"IRON",
        },
        img2:{
            "img":ovenicon,
            "data":"OVEN",
        },
        img3:{
            "img":windowicon,
            "data":"WINDOWS",
        },
        img4:{
            "img":fridgeicon,
            "data":"FRIDGE",
        }


    }
    const bankDetails={
        "placeholder":"MM/YY",
        "placeholder":"CVV",
        "placeholder":"Name on Card",
      

    } 

    return (
        <div className="main">
            {/* calling header ,title,BookingSection component */}
            <Header1/>
            <div style={{marginTop:'10%'}}>
            <Title/>
            <BookingSection static={data} txt={txt} strong={strong} imgdata={imgData} imgdata1={imgData1} bank={bankDetails} prefclick={cardonClick} />
            </div>

            
        </div>
    )
}
