import React,{useContext, useEffect} from 'react'
import { ShopContext } from '../Context';
import data from '../data.json'
import $ from 'jquery'


const Trend = () => {

    useEffect(()=>{
        $('.trendpro p').on('click', function () {
            $('.trendpro p').removeClass('trendactive');
            $(this).addClass('trendactive');
        });
        $('.hot').on('click', function () {
            $('.pros').css('display', 'none');
            $('.hote').css('display', 'block');
        });
        $('.cold').on('click', function () {
            $('.pros').css('display', 'none');
            $('.colde').css('display', 'block');
        });
        $('.backery').on('click', function () {
            $('.pros').css('display', 'none');
            $('.bakerye').css('display', 'block');
        });
        $('.beans').on('click', function () {
            $('.pros').css('display', 'none');
            $('.beanse').css('display', 'block');
        });
    })

    return ( 
        <div className="trend">
            <h5>Trnedy</h5>
            <div className="hottrend">
                <div className="trendpro">
                    <p className='hot trendactive'>Hot</p>
                    <p className='cold'>Cold</p>
                    <p className='backery'>Backery</p>
                    <p className='beans'>Beans</p>
                </div>
                <div className="pros hote">
                    <div className="element"> 
                        <img  src={data[15].image} alt="ds"/>
                        <p> {data[15].name} </p>
                    </div>
                </div>
                <div className="pros colde">
                    <div className="element"> 
                        <img  src={data[5].image} alt="ds"/>
                        <p> {data[5].name} </p>
                    </div>
                </div>
                <div className="pros bakerye">
                    <div className="element"> 
                        <img  src={data[40].image} alt="sd"/>
                        <p> {data[35].name} </p>
                    </div>
                </div>
                <div className="pros beanse">
                    <div className="element"> 
                        <img  src={data[25].image} alt="sd"/>
                        <p> {data[25].name} </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Trend;