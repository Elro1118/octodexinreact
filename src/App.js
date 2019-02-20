import React, { Component } from 'react'
import MyImage from './components/MyImage'
import MyMenu from './components/MyMenu'

const myOctopuses = [
  'https://octodex.github.com//images/filmtocats.png',
  'https://octodex.github.com//images/Sentrytocat_octodex.jpg',
  'https://octodex.github.com//images/puddle_jumper_octodex.jpg',
  'https://octodex.github.com//images/boxertocat_octodex.jpg',
  'https://octodex.github.com//images/surftocat.png',
  'https://octodex.github.com//images/hula_loop_octodex03.gif',
  'https://octodex.github.com//images/scubatocat.png',
  'https://octodex.github.com//images/vinyltocat.png',
  'https://octodex.github.com//images/tentocats.jpg',
  'https://octodex.github.com//images/snowtocat_final.jpg'
]

class App extends Component {
  render() {
    return (
      <>
        <MyMenu />
        {myOctopuses.map(octopus => {
          return <MyImage urlMyImage={octopus} />
        })}
      </>
    )
  }
}

export default App
