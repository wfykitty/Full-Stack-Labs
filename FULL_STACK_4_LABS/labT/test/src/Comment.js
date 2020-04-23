import React from 'react';
import LikeButton from './LikeButton';
import Timer from './Timer'; 

export default class Comment extends React.Component {
    constructor(props) {
    super(props);

    }

    render() {
        return(
            <>
            <Timer/>
            <h1 style={{margin: '1 em'}}>{this.props.post}</h1>
            <LikeButton/>
            </>

        )
    }

}
