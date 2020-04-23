import React from 'react';

const Redirect = (props) => {
    
    const handleRedirect = () => {
        const { history } = props;
        if(history) history.push("/");
        else console.log('history not found in props');
    };

return ( <button onClick = {handleRedirect}> Redirect </button> );
}
 
export default Redirect;