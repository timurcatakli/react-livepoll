import React, {PropTypes} from 'react'
import Headers from './containers/common/Headers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Headers />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}
export default App
