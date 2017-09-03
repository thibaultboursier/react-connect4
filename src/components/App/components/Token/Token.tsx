
import * as React from 'react'

const styleContainer = {
    padding: '5px',
    backgroundColor: 'lightgrey',
    display: 'inline-block'
};
const styleToken = {
    backgroundColor: 'blue',
    borderRadius: '25px',
    height: '40px',
    width: '40px',
};

function add() {
    console.log('Add')
}

class Token extends React.Component {
    render() {
        return <div style={styleContainer}>
            <div style={styleToken} onClick={add}></div>
        </div>;
    }
}

export default Token;