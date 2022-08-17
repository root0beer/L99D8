import React from 'react';
import "./Featured.scss";

import Yach1 from "../../assets/yach1.jpg";
import Yach2 from "../../assets/interior1.jpg";
import Yach3 from "../../assets/interior2.jpg";
import Yach4 from "../../assets/interior3.jpg";
import Yach5 from "../../assets/view1.jpg";

import Yach6 from "../../assets/yach2.jpg";
import Yach7 from "../../assets/boat21.jpg";
import Yach8 from "../../assets/boat22.jpg";
import Yach9 from "../../assets/boat23.jpg";
import Yach10 from "../../assets/boat24.jpg";

const Featured = () => {
  return (
    <div className='featured'>
        <h1 className='featured-text'>Top Featured Listings</h1>        
        <p className='featured-text'>Selected listings by Passengers Amount, Boat Type, Location</p>
        <div className='container'>
            <img className = "span-3 image-grid-row-2" src={Yach1} alt=""/>
            <img src={Yach2} alt=""/>
            <img src={Yach3} alt=""/>
            <img src={Yach4} alt=""/>
            <img src={Yach5} alt=""/>
            <div className='span-3 img-details'>
                <div className='top'>
                    <h2>Saint-Tropez, France</h2>
                    <p>Boat for Sale</p>
                    <p className='price'>$1.654.000</p>
                </div>
                <div className='info-grid'>
                    <div>
                        <div className='info'>
                            <p classname="bold">Guests:<p>6</p></p>
                        </div>
                        <div className='info'>
                            <p classname="bold">Boat Type:<p>Sailing</p></p>
                        </div>
                    </div>
                    <div>
                        <div className='info'>
                            <p classname="bold">1 day rent:<p>$2700</p></p>
                        </div>
                        <div className='info'>
                            <p classname="bold">1 week rent:<p>$12870</p></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='span-2 right-img-details'>
                <p>This stunning sailing yacht boasts an impressive interior volume and extraordinary comfort over five expansive decks. She features 3 guest staterooms to accommodate 6 guests, of which two convert from twin to king size and vice-versa, plus a staff cabin for two.</p>
                <button className='btn'>View listing</button>
            </div>
        </div>
       {/**Secont section */}

       <div className='container'>
           
            <img className = "order-2" src={Yach7} alt=""/>
            <img className = "order-3" src={Yach8} alt=""/>

            <img className='span-3 image-grid-row-2 order-1' src={Yach6} alt=""/>

            <img className = "order-4" src={Yach9} alt=""/>
            <img className = "order-5" src={Yach10} alt=""/>


            <div className='span-2 right-img-details order-7'>
                <p>This stunning sailing yacht boasts an impressive interior volume and extraordinary comfort over five expansive decks. She features 3 guest staterooms to accommodate 6 guests, of which two convert from twin to king size and vice-versa, plus a staff cabin for two.</p>
                <button className='btn'>View listing</button>
            </div>


            <div className='span-3 img-details order-6'>
                <div className='top'>
                    <h2>Saint-Tropez, France</h2>
                    <p>Boat for Sale</p>
                    <p className='price'>$1.654.000</p>
                </div>
                <div className='info-grid'>
                    <div>
                        <div className='info'>
                            <p classname="bold">Guests:<p>6</p></p>
                        </div>
                        <div className='info'>
                            <p classname="bold">Boat Type:<p>Sailing</p></p>
                        </div>
                    </div>
                    <div>
                        <div className='info'>
                            <p classname="bold">1 day rent:<p>$2700</p></p>
                        </div>
                        <div className='info'>
                            <p classname="bold">1 week rent:<p>$12870</p></p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Featured