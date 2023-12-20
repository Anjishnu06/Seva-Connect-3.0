import React from 'react';
import style from './Intro.css';

function Intro() {
  return (
    <>
      <div className='Intro-contain'>
        <div className='intro-head'>
          <h1>What is ESG?</h1>
        </div>
        <div className='para'>
          <p>ESG is a test of the institution on how sustainable the company is and it is<br /> tested on 3 major factors that are</p>
        </div>
        <div className='intro-main'>
          <div className='point'>
            <span>E</span>Impact on Enviroment<br/>
          </div>
          <div className='point'>
            <span>S</span>Social Impact<br/>
            <button className='btn' id="butto">Visit DashBoard</button>
          </div>
          <div className='point'>
            <span>G</span>Overall Governance<br/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro
