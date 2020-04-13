import React from 'react';
import axios from "axios";
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';


class UserList extends React.Component {
    constructor(props) {
    super(props);

    this.handleAddStudent = this.handleAddStudent.bind(this);
    }

    state = {
      users: []
    }


    handleAddStudent = (newUser) => {
        newUser.name = newUser.user;
    }

    handleDeleteStudent = (deletedId) => {
        this.setState(() => ({
            users: this.state.users.filter(user => user.id !== deletedId)
    })
    );}

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const users = res.data;
            this.setState({ users });
    })
    }
    
    render() {
        return (
          <ul>
            {this.state.users.map((user,key) => (<li key={user.id}>
            {user.name.toString()}
            <DeleteStudent id={user.id} onDeleteStudent={this.handleDeleteStudent} />
            </li>))}
          </ul>
        )
      }
    }
    
export default UserList;
 