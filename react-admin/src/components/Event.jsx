import React from 'react';
import style from "./Event.css";

function Event() {
  return (
    <>
     <div className='Event-contain'>
      <div className='Event-head'>
        <div className='head'>
          <h1>Upcoming Events</h1>
        </div>
        <div className='side'>
          <h5>View More</h5>
        </div>
      </div>
      <div className='Event-main'>
        <div className='Eboxes'>
          <div className='boxs'>
            <div className='date'>
              <h3>08</h3>
              <br/>
              <h4>JUNE</h4>
            </div>
            <div className='desc'>
              <p>Event Description goes here</p>
              <br />
              <p>8AM-PM</p>
              <p>Smart India Hackethon</p>
            </div>
          </div>
          <div className='boxs'>
            <div className='date'>
              <h3>28</h3>
              <br/>
              <h4>DECEMBER</h4>
            </div>
            <div className='desc'>
              <p>Event Description goes here</p>
              <br />
              <p>8AM-PM</p>
              <p>Smart India Hackethon</p>
            </div>
          </div>
          <div className='boxs'>
          <div className='date'>
              <h3>17</h3>
              <br/>
              <h4>JANUARY</h4>
            </div>
            <div className='desc'>
              <p>Event Description goes here</p>
              <br />
              <p>8AM-PM</p>
              <p>Smart India Hackethon</p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}
export default Event
