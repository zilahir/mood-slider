import React, { Component } from 'react';
import MoodSlider from './MoodSlider';
import './../../../node_modules/react-input-slider/dist/input-slider.css'
import Emoji from 'react-emoji-render';
import { connect } from 'react-redux';

const mapStateToProps = function(state){  
  return {    
    mood: state.mood,
    x: state.x,            
  }  
}

class Card extends Component {    
  render() {               
      return (        
        <div className="card">
            <p>
               {this.props.naame}
            </p>
            <img src={this.props.profilePic} />
            <MoodSlider id={this.props.thisId} thisPos={this.props.x}/>
            <Emoji onlyEmojiClassName="mood-ej" text={this.props.mood} />                  
        </div>
      );
  }
}

export default connect(mapStateToProps)(Card);