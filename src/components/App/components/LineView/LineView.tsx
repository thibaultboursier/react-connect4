import * as React from 'react'
import Token from '../Token/Token'

interface LineViewProps {
    cols?: number
}

const LineView = ({ cols = 7 }: LineViewProps) => {
    const tokens = [];
    let i = 0;
    
    for (i; i < cols; i++) {
        tokens.push(<Token key={i} />);
    }

    return (
        <div>
            {tokens}
        </div>
    )
}

export default LineView;