import React from 'react'
import {Card, Button} from 'react-bootstrap' 


const ContactUs = () => {
    return ( 
        <section className="contact-us pb-5">
            <h3>Contact Us</h3>
            <Card >
                <Card.Img variant="top" src="./images/Humaaans - 3 Characters.png" />
                <Card.Body>
                    <Card.Title style={{color: '#ddbbc6'}}>Have a wild Idea!</Card.Title>
                    <Card.Text>
                    Your particpation is a very important aspect of success if you have a product in mind or a creazy idea you can share it here
                    </Card.Text>
                    <Button className='idea' variant="primary">Tell Us</Button>
                </Card.Body>
            </Card>
     
        </section>
     );
}
 
export default ContactUs;