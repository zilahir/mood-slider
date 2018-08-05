import React, { Component } from 'react';
import './dist/css/critical.min.css';
import { Main } from './components/';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  x: {},
  mood: {
    1: '😑',
    2: '😑'
  }  
};

function reducer(state = initialState, action) {  
  switch(action.type) {
    case 'UPDATE_MOOD':
      return {
        ...state,
        mood: state.mood,
        x: {
          ...state.x,
          [action.id]: action.x
        }
      };
    default:
      return state;
  }  
}

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main /> 
      </Provider>
    );
  }
}

export default App;
