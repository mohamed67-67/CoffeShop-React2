import React,{useContext,useEffect} from 'react';
import { ShopContext } from './Context';
import  $ from 'jquery'

const Types = () => {
    
    const {All,Cold, Hot, Beans,Bakery,state} = useContext(ShopContext)

    useEffect(()=>{
        $('.ty p').on('click', function () {
            $('.ty p').removeClass('active');
            $(this).addClass('active');
        });
        
    },[state])
    
    
    return ( 
        <div className='types'>
            <div className="ty">
                <h5>Categories</h5>
                <p className="active" onClick={All}>All</p> 
                <p onClick={Hot}>Hot</p> 
                <p onClick={Cold}>Cold</p> 
                <p onClick={Beans}>Beans</p> 
                <p onClick={Bakery}>Bakery</p>
            </div>
        </div>
     );
}
 
export default Types;