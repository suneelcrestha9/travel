import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [navActive,setNavActive]=useState(false);
    const [ham,setHam]=useState(true)

    //it handels the hiding and showing of the navlinks and also the cross and ham list 
    const handelActive=()=>{
        setNavActive(!navActive);
        setHam(!ham);
    }

    //it handels the hiding of the links when clicked
    const handelNavhide=()=>{
        setNavActive(!navActive)
    }
  return (
    <>
    <nav>
        <div className="navbar">
            <div className="logo">
                <h2>City Travel</h2>
            </div>
            <div className="navRight">
                <div className={`navlinks ${navActive == true ? 'show' : ''}`}>
                    <ul>
                        <li onClick={handelNavhide}><a href="/">Home</a></li>
                        <li onClick={handelNavhide}><a href="/">About</a></li>
                        <li onClick={handelNavhide}><a href="/">Types</a></li>
                        <li onClick={handelNavhide}><a href="/">Contact</a></li>
                    </ul>
                </div>
                <div className="login">
                    <button class="button type1">
                        <span class="btn-txt">Login</span>
                    </button>
                </div>
                </div>
        </div>
                <div className="ham" onClick={handelActive}>
                    {ham== true ? 
                    (<img src="./src/assets/ham.png" alt="" />) : 
                    (<img src="./src/assets/close.png" alt="" />)}
                </div>
    </nav>
    </>
  )
}
