import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './components/App/App'

const render = (Component: any) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  );
};

render(App)
