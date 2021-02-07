import React from 'react'
import {Link} from 'react-router-dom'
import {useWindowScroll} from 'react-use'
import $ from 'jquery'
import { Navbar,Nav} from 'react-bootstrap';






const NavBar = () => {
    
    
    const {y} = useWindowScroll()
    if (y > 50 ) {
        $('.navbar').css({
            backgroundColor: 'rgb(216 179 134)',
            borderRadius: '0px 0px 15px 15px'
        });
        $('.plat').css('color', '#1f3933');
        $('[title="logo"]').css('width','60px')
    }else {
        $('.navbar').css('backgroundColor', 'transparent');
        $('.plat').css('color', '#deb685');
        $('[title="logo"]').css('width','80px');
       
    }
    $('.navbar-toggler').on('click', function () {
        $('.navbar-collapse').css({
            backgroundColor: 'rgb(216, 179, 134)',
            borderRadius: '0px 0px 15px 15px'
        });
        $('.plat').css('color', '#1f3933');
    });
    
    $('.navbar').css('paddingBottom', '0px');
    
    return ( 
        <Navbar className='navbar'  className='fixed-top' collapseOnSelect expand="lg"  fixed-top variant="light">
            <Navbar.Brand href="#home"><img title="logo" src="./images/Coffee-shop-logo-on-transparent-background-PNG.png" width="80" height="auto"/></Navbar.Brand>
            <Navbar.Toggle className='navbar-toggler' aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className='navbar-collapse' id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link to='/'> <p style={{ color: '#deb685',  margin: '0px 20px', fontSize :'1.2rem', fontWeight: 700}} className='plat'>Home</p> </Link>
                    <Link to='/menu'> <p style={{ color: '#deb685', margin: '0px 20px', fontSize :'1.2rem', fontWeight: 700}} className='plat'>Menu</p> </Link>
                    <Link to='/about'> <p style={{ color: '#deb685', margin: '0px 20px', fontSize :'1.2rem', fontWeight: 700}} className='plat'>About Us</p> </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NavBar;