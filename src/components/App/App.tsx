import * as React from 'react'

interface Props {}

interface LineViewProps {
    cols?: number
}

const LineView = ({cols=7}: LineViewProps) => {
    const token = '.\t'
    return <div>
        {token.repeat(cols)}<br/>
    </div>
}

export default class App extends React.Component<Props, void> {
    render() {
        return <div>
            <LineView />
            <LineView />
            <LineView />
            <LineView />
            <LineView />
            <LineView />
            <LineView />
        </div>
    }
}
