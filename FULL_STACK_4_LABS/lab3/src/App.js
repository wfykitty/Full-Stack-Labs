import React from 'react';
import logo from './logo.svg';
import './App.css';
import './college';
import './students';
import Student from './students';
import College from './college';
import Course from './courses';

class App extends React.Component {
  render(){
    return( <>
      <Student name="Rick Rude" number = "1111"/>
      <Course number="Course 2"/>
      <Student name="Shawn Michaels" number="2222"/>
      <Course number="Course 1"/>
      <Student name="Bret Hart" number="33333"/>
      <Course number="Course 3"/>
      <College name="George Brown" location="Casa Loma"/>


    </>)
  }
}


export default App;
