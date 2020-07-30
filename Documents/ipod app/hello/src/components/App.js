import React from 'react';
import '../App.css';
import Display from './Display';
import Controller from './Controller';
import rootReducer from '../reducers';
import {createStore} from 'redux';

const store = createStore(rootReducer);
const {menu} = store.getState();

console.log('store',store);

class App extends React.Component {

 
   render(){
    return (
      <div className='ipod'>
        <Display
          menu = {menu}
          store = {store}
        />
        <Controller store = {store}/>
      </div>
    );
   }
}

export default App;
