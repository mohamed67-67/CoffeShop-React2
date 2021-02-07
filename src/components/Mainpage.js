import React from 'react'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import FeedBack from './FeedBack'
import Hero from './Hero'
import Trend from './Trend'


const Mainpage = () => {
    return ( 
        <div>
            <Hero/>
            <AboutUs/>
            <ContactUs/>
            <Trend/>
            <FeedBack/>
        </div>
     );
}
 
export default Mainpage;