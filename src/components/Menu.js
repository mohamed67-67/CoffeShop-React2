import React, { useContext } from 'react'
import { ShopContext } from '../Context';
import Types from '../types';
import {useWindowScroll} from 'react-use'
import $ from 'jquery'



const Menu = () => {

    const {state} = useContext(ShopContext)
    let {y} = useWindowScroll()

    if(y > 1000){
        $('#arrow').css('opacity', '1');
        $('#arrow').on('click', function () {
           $(window).scrollTop(0);
        });
    }else{
        $('#arrow').css('opacity', 0);
    }

    return ( 
        <section>
            <h3 className='heading'>menu</h3>
            <div className="menu">
            <div className="categories">
            <Types/>
            </div>

            <div className='goods'>
                {state.map(item =>{
                    return(
                        <div key={item.id} className='item'>
                            <img src={item.image} alt="dsa"/>
                            <h5> {item.name} </h5>
                            <p> {item.category} </p>
                        </div>
                    )
                })}
            </div>
        </div>
        <i id='arrow' className="far fa-arrow-alt-circle-up"></i>
        </section>
    );
}
 
export default Menu;