import React from 'react';
import style from './Intro.css';
import { Link } from 'react-router-dom';

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
          <div className='point' style={{fontSize:20}}>
            <span>E</span>Impact on Enviroment ♻️<br/>
            <li>Climate & Energy</li>
            <li>GHG Emisiions</li>
            <li>Water</li>
            <li>Materials & Waste</li>
            <li>Biodiversity</li>
            <li>Air Emissions</li>
          </div>
          <div className='point' style={{fontSize:20}}>
            <span>S</span>Social Impact 👥<br/>
            <li>Health & Safety</li>
            <li>Diversity,Equity & Inclusion</li>
            <li>Communities</li>
            <li>Labor</li>
            <Link to="/login">
            <button className='btn' id="butto" >Visit DashBoard</button>
            </Link>
          </div>
          <div className='point' style={{fontSize:20}}>
            <span>G</span>Overall Governance 📊<br/>
            <li>Coroprate Governance</li>
            <li>Shareholder Pattern</li>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro
