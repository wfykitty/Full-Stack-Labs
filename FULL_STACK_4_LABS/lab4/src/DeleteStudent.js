import React from 'react';
import axios from "axios";


class DeleteStudent extends React.Component {
    constructor(props) {
    super(props);
   
    this.state = {id: this.props.id}

    this.handleSubmit = this.handleSubmit.bind(this); }

    handleSubmit = event => {event.preventDefault();

  
    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(res => {
          console.log(res.data);
          this.props.onDeleteStudent(this.state.id);
        });
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <button type="submit">Delete</button>
          </form>
        </div>
      )
    }
  }

  export default DeleteStudent;