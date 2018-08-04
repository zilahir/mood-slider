import React, { Component } from 'react';
import InputSlider from 'react-input-slider';
import { connect } from 'react-redux';

class MoodSlider extends Component {
    handleChange = pos => {        
        this.props.dispatch({ type: 'UPDATE_MOOD', x: pos.x, id: this.props.id });
    };

  render() {      
      return (                    
            <InputSlider
            className="slider slider-xy"
            axis="xy"
            x={this.props.thisPos}
            xmax={100}            
            ymax={100}
            onChange={this.handleChange}
            id={this.props.id}
            />                            
      );
  }
}

function mapStateToProps(state) {        
    return {
        x: state.x,        
    }    
}

export default connect(mapStateToProps)(MoodSlider);