import React, { Component } from 'react'

class Description extends Component {
  render() {
    return (
      <div>
        <figcaption className="myFigurationCaption">
          <p className="p3">{this.props.numberImage}</p>

          <section className="mySection1">
            <ul>
              <li className="p1">the</li>
              <li className="p2">{this.props.nameImage}</li>
              <li className="p1">by</li>
              <li>
                <a href={this.props.authorLink}>
                  <img className="myImage2" src={this.props.photoAuthor} />
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
