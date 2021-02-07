import React from 'react'

const Hero = () => {
    document.addEventListener('mousemove', move);
    
    function move (e) {
        this.querySelectorAll('.move').forEach(layer => {
            var speed = layer.getAttribute('data-speed')
            var x =(window.innerWidth - speed * e.pageX)/120
            var y = (window.innerHeight - speed * e.pageY)/80
    
            layer.style.transform = `translateX(${x}px)  translateY(${y}px)`
          
        })
    }
    
    return ( 
        <section className="hero">
                <div className="heading">
                    <div className="text">
                    <h1>Coffee Shop</h1>
                    <h5>travel to brazil in one <span><img src="./images/5a1ca6113f6b67.9840137515118269612598.png" alt=""/></span></h5>
                    </div>
                </div>
                <div data-speed="2" class="container">
                    <div className="circle"></div>
                    <img src="./images/5a35e7833cc8e0.804529141513482115249.png" className="move" data-speed="-2" alt="fd"/>
                    <img src="./images/Chocolate-and-milk-splash-on-transparent-background-PNG.png" className="move" data-speed="2" alt="fd"/>
                    <img src="./images/kisspng-coffee-bean-cafe-single-origin-coffee-coffee-beans-transparent-background-5a78ef52dbb6a1.2904727815178750269.png" className="move" data-speed="-5" alt="df"/>
                </div>
            
        </section>
     );
}
 
export default Hero;