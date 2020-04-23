import React from 'react';

import './App.css';
import TweeterContainer from './TweeterContainer';


export default class App extends React.Component {
  render(){
    // const mystyle = {
    //   fontFamily: "Arial"
    // };
    return( 
<>
  <TweeterContainer status=" At home, binge watching Breaking Bad for second time!">
  </TweeterContainer>
  <TweeterContainer status=" I cannot wait for sunshine and cocktails!">
  </TweeterContainer>
  <TweeterContainer status=" Do you prefer Cancun or Dominica? ">
  </TweeterContainer>
</>)

  };
} 