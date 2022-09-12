import './button-style.css'
import React from 'react'
import SoundOn from './assets/sound--on.svg'
import SoundOff from './assets/sound--off.svg'
import Backgroundsound from './background.mp3'

export class Music extends React.Component {
    state = {
      play: false
    }
    audio = new Audio(<Backgroundsound/>)
  
    componentDidMount() {
      audio.addEventListener('ended', () => this.setState({ play: false }));
    }
    
    componentWillUnmount() {
      audio.removeEventListener('ended', () => this.setState({ play: false }));  
    }
  
    togglePlay = () => {
      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audio.play() : this.audio.pause();
      });
    }
  
    render() {
      return (
        <div>
          <button className='sound-button' onClick={this.togglePlay}>{this.state.play ? <SoundOff/> : <SoundOn/>}</button>
        </div>
      );
    }
  }

  export default Music