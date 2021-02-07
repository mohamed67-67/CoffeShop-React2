import React,{useEffect} from 'react';
import {Form, Button} from 'react-bootstrap'
import $ from 'jquery'

const FeedBack = () => {
    useEffect(()=>{
        $('.idea').on('click', function () {
            $('#idea').addClass('appear');
            $('section').css('filter', 'blur(3px)');
        });
        
        $('.close').on('click', function () {
            $('#idea').removeClass('appear');
            $('section').css('filter', 'blur(0px)');
        });
    })
      
    return ( 
        <div id="idea" className="pop-ups">
            <i className="far close fa-times-circle"></i>
            <Form >
                <Form.Group >
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control style={{width: '50%', margin: '0px auto'}} required type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control style={{width: '50%', margin: '0px auto'}} required type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control style={{width: '50%', margin: '0px auto'}} required type="number" placeholder="Number" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>FeedBack</Form.Label>
                <Form.Control required style={{width: '70%', margin: '0px auto'}} as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                     Submit
                </Button>
            </Form>
        </div>
        // <div id="idea" className="pop-ups">
        //   <i class="far close fa-times-circle"></i>
        //   <form>
        //     <label >Name</label><br/>
        //     <input type="text"><br/>
        //     <label >Email</label><br/>
        //     <input type="email" id="email" name="email"><br/>
        //     <label >Phone Number</label><br/>
        //     <input type="number"><br/>
        //     <label >Your Idea</label><br/>
        //     <textarea cols="30" rows="10"></textarea>
        //     <button>Submit</button>
        //   </form>
        // </div>
     );
}
 
export default FeedBack;