import React from 'react'
import './Footer.css'

export default function Footer(props) {
  return (
    <div>
      <div className="aboutus">
        <div className="aboutus-card">
            <img src={props.url} alt="" />
        </div>
        <h1>{props.title} </h1>
        <p>{props.description} </p>
      </div>
    </div>
  )
}
