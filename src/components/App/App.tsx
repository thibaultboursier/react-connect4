import * as React from 'react'
import ColView from './components/ColView/ColView';

export default class App extends React.Component {
    colsCount = 7;

    render() {
        let i = 0;
        let cols = [];

        for (i; i < this.colsCount; i++) {
            cols.push(<ColView key={i} />);
        }
        return <div>{cols}</div>
    }
}
