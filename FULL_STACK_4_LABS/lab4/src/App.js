import React from 'react';
import './App.css';
import StudentList from './StudentList';
import AddStudent from './AddStudent';


class App extends React.Component {
  render(){
    return( <>
 
    <AddStudent />  
    <StudentList />
    
    </>)
  };
}


export default App;
