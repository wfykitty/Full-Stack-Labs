import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Greeter from './Greeter';
import LikeButton from './LikeButton';
import * as serviceWorker from './serviceWorker';

const Display = function() {
  return <button>like!</button>;
};

const Buttons = () => {
 let array = [];
   for(let i =0; i<10; i++) {
    array.push(Display);
  }
    return array;
}; 


ReactDOM.render(
  <React.StrictMode>
    <Greeter/> 
    {/* <LikeButton/> */}
    {Buttons().map(function(Display) {
      return Display();
    })}
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
// <Display/>, document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
