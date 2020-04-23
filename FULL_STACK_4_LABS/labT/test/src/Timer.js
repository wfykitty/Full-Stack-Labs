import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';


export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
        return (
             <Moment format='h:mm:ss a'>
            </Moment>
        );
    }
}