import * as React from 'react'
import Token from '../Token/Token'

interface ColViewProps {
    cols?: number
}

const ColView = ({ cols = 7 }: ColViewProps) => {
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

export default ColView;