import React, { Component } from 'react'
import tri from './images/tri.png'
import Description from './Description'

class MyImage extends Component {
  render() {
    return (
      <div className="myImageSection">
        <main className="mySection">
          <section>
            <img
              className="myImage"
              src={this.props.urlMyImage}
              alt={this.props.nameImage}
            />
            <section className="mySection2">
              <img src={tri} />
            </section>
            <Description
              numberImage={this.props.nroImage}
              nameImage={this.props.nameImage}
              authorLink={this.props.authorLink}
              photoAuthor={this.props.imageAuthor}
            />
          </section>
        </main>
      </div>
    )
  }
}
export default MyImage
