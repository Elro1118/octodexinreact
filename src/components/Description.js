import React, { Component } from 'react'
import photoAuthor from './images/photo.png'
class Description extends Component {
  render() {
    return (
      <div>
        <figcaption className="myFigurationCaption">
          <p className="p3">#146</p>

          <section className="mySection1">
            <ul>
              <li className="p1">the</li>
              <li className="p2">Filmtocats</li>
              <li className="p1">by</li>
              <li>
                <a href="https://github.com/heyhayhay">
                  <img className="myImage2" src={photoAuthor} />
                </a>
              </li>
            </ul>
          </section>
        </figcaption>
      </div>
    )
  }
}

export default Description
