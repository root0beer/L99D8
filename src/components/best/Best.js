import React from 'react';
import "./Best.scss";
import YachtsImg1 from "./../../assets/yacht1.jpg";
import YachtsImg2 from "./../../assets/yacht2.jpg";
import YachtsImg3 from "./../../assets/yacht3.jpg";

const Best = () => {
  return (
    <div className='best'>
        <h2>Pick Best Rated boats and yachts for your next adventure</h2>
        <div>
            <p><span className='bold'>All</span></p>
            <p>Sail</p>
            <p>Motor</p>
            
        </div>
        <div className='container'>
            <img src={YachtsImg1} alt=""/>
            <img src={YachtsImg2} alt=""/>
            <img src={YachtsImg3} alt=""/>
        </div>
        <button className='btn'>View All</button>
    </div>

  )
}

export default Best