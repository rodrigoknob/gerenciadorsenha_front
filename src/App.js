
import React from 'react'
import Routes from './routes'

import 'bootswatch/dist/flatly/bootstrap.css'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import './custom.css'
class App extends React.Component {
  render () {
    return (
      <div>
        <Routes/>
      </div>
    )
  }
}

export default App;
