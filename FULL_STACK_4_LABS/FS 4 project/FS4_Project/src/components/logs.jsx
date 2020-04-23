import React, { Component } from "react";
import axios from "axios";

class Logs extends Component {
  state = {
    logs: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/api/logs`).then((res) => {
      console.log(res.data);
      const logs = res.data;
      this.setState({ logs });
    });
  }
  render() {
    return (
      <div className="container " style={{ marginTop: "30px"}} >
        <table className="table table-dark">
          <thead>
            <tr>
              <th>ErrorType</th>
              <th>ErrorMessage</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.logs.map((log) => (
              <tr key={log._id}>
                <td>{log.errorType}</td>
                <td>{log.errorMessage}</td>
                <td>{log.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Logs;
