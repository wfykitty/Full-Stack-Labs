import React, { Component } from "react";

class Student extends Component {
  render() {
    const { studentname, studentno } = this.props.match.params;
    
    return (
      <div>
        <p>Student</p>
          {`The student name is ${studentname}`}
          &nbsp;&nbsp;&nbsp;
          {`The student name is ${studentno}`}
      </div>
    );
  }}

export default Student;