import React from "react";

export default class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Like:0 }
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) { 
    event.preventDefault();

    this.setState ({Like: this.state.Like +1});
 
    }
    render() {
        return(
            <>
            <button value="Like" onClick={this.handleClick}>Like!</button>
            <>{this.state.Like} Likes</>
            </>)
    }}
