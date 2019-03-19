import React, { Component } from 'react'
import MyImage from './components/MyImage'
import MyMenu from './components/MyMenu'

class App extends Component {
  state = {
    myOctopuses: []
  }

  componentDidMount() {
    fetch('https://sdg-octodex.herokuapp.com/')
      .then(resp => resp.json())
      .then(myData => {
        console.log(myData)
        this.setState({
          myOctopuses: myData.data
        })
      })
  }
  render() {
    return (
      <>
        <MyMenu />
        <div className="pictures">
          {this.state.myOctopuses.map(octopus => {
            return (
              <MyImage
                key={octopus.number}
                urlMyImage={octopus.image}
                nameImage={octopus.name}
                nroImage={octopus.number}
                authorLink={octopus.authors[0].link}
                imageAuthor={octopus.authors[0].image}
              />
            )
          })}
        </div>
        <footer>Made SDG with ❤ </footer>
      </>
    )
  }
}

export default App
