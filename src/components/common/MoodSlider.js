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
            x={this.props.x}
            xmax={100}            
            ymax={100}
            onChange={this.handleChange}
            id={this.props.id}
            />                            
      );
  }
}

function mapStateToProps(state, ownProps) {    
    return {
        x: state.x[ownProps.id] || 50              
    }    
}

export default connect(mapStateToProps)(MoodSlider);