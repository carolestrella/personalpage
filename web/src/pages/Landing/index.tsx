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
          <h1>Code</h1>
        </div>
      </div>
    </div>
  )
}

export default Landing