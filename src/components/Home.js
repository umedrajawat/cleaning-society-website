import React from 'react';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

// calls the home page and contains all the data and its coponents required for the home page

export default function Home() {
  // passing data as props
    const ourServices={
        'livingRoomData':{
          'title':'Make Better ',
           'text':'Living Room',
          'data':
          [
          "Cleaning and high rise dusting",
          "Furniture design/vacumming",
          "Fixtures cleanin AC/Fan etc",
          "Wall marks cleaning(Washable paint)",
          "Floor scrubbing/Dry and Wet mop",
          "Carpet vacuuming",
          ]
        },
        'kitchenData':{
          'title':'Your Beautiful ',
          'text':'Kitchen',
          'data':
          [
          "Wash and scrub sink",
          "Wash cabinet faces and appliances",
          "Dust and wipe all reachable surfaces",
          "Wipe mirrors and glass fixtures",
          "Vacuum and wipe all floors",
          "Take out trash and recyclables",
          ],
    
        }
      }
    return (
       
    <>
    {/* calling different components */}
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4 listData={ourServices}/>
      <Section5/>
    </> 
    )
}
