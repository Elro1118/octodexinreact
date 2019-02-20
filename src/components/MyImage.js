import React, { Component } from 'react'
import tri from './images/tri.png'
// import catImage from './images/filmtocats.png'
import Description from './Description'

class MyImage extends Component {
  render() {
    return (
      <div className="myImageSection">
        <main className="mySection">
          <section>
            <img className="myImage" src={this.props.urlMyImage} alt="My Cat" />
            <section className="mySection2">
              <img src={tri} />
            </section>
            <Description />
          </section>
        </main>
      </div>
    )
  }
}
export default MyImage
