import React, { Component } from "react";
import axios from "axios";
//import TableFilter from 'react-table-filter';

class Chats extends Component {
  state = {
    chats: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/api/chats`).then((res) => {
      console.log(res.data);
      const chats = res.data;
      this.setState({ chats });
    });
  }
  render() {
    return (
      <div className="container " style={{ marginTop: "30px"}} >
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Sender</th>
              <th>Message</th>
              <th>Room</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.chats.map((chat) => (
              <tr key={chat._id}>
                <td>{chat.sender}</td>
                <td>{chat.message}</td>
                <td>{chat.room}</td>
                <td>{chat.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Chats;
