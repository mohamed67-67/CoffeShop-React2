import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return ( 
        <section class="about">
            <h2>About Us</h2>
            <div class="contain">
                <div class="video">
                <video src="./images/Coffee.mp4"  controls autoPlay loop ></video>
                </div>
                <div class="text">
                <p>
                    Our bussiness was established in 1980 in where ever through this journey till now we gain exp in coffe planting all the way to introduce hot and deleciuos for you <br></br>
                    Our bussiness was established in 1980 in where ever through this journey till now we gain exp in coffe planting all the way to introduce hot and deleciuos for you<br></br>
                </p>
                <Link to='/about'> <Button className='aboutbtn'>More about us</Button></Link>
                </div>
            </div>
        </section>
     );
}
 
export default AboutUs;