import React, { Component } from 'react'
import logo from './images/logo.png'

class MyMenu extends Component {
  render() {
    return (
      <div>
        <nav className="myMainMenu">
          <header>
            <a href="http://localhost:3000/">
              <img src={logo} className="myLogo" />
            </a>
          </header>
          <ul className="myFontMenu">
            <li>
              <a href="http://feeds.feedburner.com/Octocats">RSS</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq.html">FAQ</a>
            </li>
            <li>
              <a href="https://github.com/">Back to GitHub</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
export default MyMenu
