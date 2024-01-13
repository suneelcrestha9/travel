import React from 'react'
import './Choices.css'

export default function Choices(props) {
  return (
   <>
   <div className="mainBox">
        <div className="box">
            <div className="boxImage">
                <img src={props.image} alt="" />
            </div>
            <div className="imageTitle">
                <h3>{props.title}</h3>
            </div>
        </div>
        <div className="aboutBox">
            <div className="boxPrice">
                <h4>{props.price}</h4>
            </div>
            <div className="booking">
                <h4>Booking Id:{props.id}</h4>
                <p>{props.resort}</p>
            </div>
        </div>
   </div>
   </>
  )
}
