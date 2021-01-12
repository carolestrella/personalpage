import React from 'react'

import CodeImg from '../../assets/images/code.svg'
import './styles.css'

function Landing() {
  return(
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={CodeImg} alt="code"/>
        </div>

        <div className="menu-container">
          <a href="" className="code">
            CODE
          </a>

          <a href="" className="art">
            ART
          </a>

          <a href="" className="about">
            ABOUT
          </a>
        </div>

        <div className="switch">
          <input type="checkbox" id="switch" />
          <label htmlFor="switch">Toggle</label>
        </div>

      </div>
    </div>
  )
}

export default Landing