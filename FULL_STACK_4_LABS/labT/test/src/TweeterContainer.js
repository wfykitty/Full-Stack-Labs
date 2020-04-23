import React from 'react';
import Comment from './Comment';

export default class TweeterContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      comments: [], value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
    const newComment = <Comment post = {this.state.value}> </Comment>;
    this.setState({comments:
      [...this.state.comments, newComment] 
    });
    }

    render() {
      return (
        <>
        <> {this.props.status}</>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" name={this.state.value} onChange={this.handleChange} />
            <input type="submit" value = "POST" /></label>
          </form> 
          {this.state.comments.map((item, key) =><li key={key}>{item}</li>
          )}
        </>
      )
    }
  }
 