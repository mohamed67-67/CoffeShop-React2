import React from 'react'


const Footer = () => {
    return ( 
        <section>
        <div className="footer">
          <div className="first">
            <img src="./images/Coffee-shop-logo-on-transparent-background-PNG.png" alt=""/>
            <h3>Coffe Shop</h3>
            <h5>travel to brazil in one <span><img src="./images/5a1ca6113f6b67.9840137515118269612598.png" alt=""/></span>  </h5>
          </div>
          <div className="second">
            <i className="fas fa-map-marker-alt"></i><p>where ever street 9th district alex</p>
            <i className="fas fa-phone-alt"></i><p>157 359 852951</p>
            <i className="fas fa-mail-bulk"></i><p>Mohamed. sharkawey. 77@gmail. com</p>
          </div>
          <div className="third">
            <div Name="text">
              <h5>Socials</h5>
            <div className="socials">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div>
            </div>
            <div className="im">
              <img  src="./images/5a35e7833cc8e0.804529141513482115249.png" alt="ds"/>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Footer;