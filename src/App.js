import React, { Component } from 'react'
import MyImage from './components/MyImage'
import MyMenu from './components/MyMenu'

// const myOctopuses = [
//   'https://octodex.github.com//images/filmtocats.png',
//   'https://octodex.github.com//images/Sentrytocat_octodex.jpg',
//   'https://octodex.github.com//images/puddle_jumper_octodex.jpg',
//   'https://octodex.github.com//images/boxertocat_octodex.jpg',
//   'https://octodex.github.com//images/surftocat.png',
//   'https://octodex.github.com//images/hula_loop_octodex03.gif',
//   'https://octodex.github.com//images/scubatocat.png',
//   'https://octodex.github.com//images/vinyltocat.png',
//   'https://octodex.github.com//images/tentocats.jpg',
//   'https://octodex.github.com//images/snowtocat_final.jpg',
//   'https://octodex.github.com//images/justicetocat.jpg',
//   'https://octodex.github.com//images/blacktocats.png'
// ]

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
      </>
    )
  }
}

export default App
