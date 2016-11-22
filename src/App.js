import React, {PropTypes} from 'react'
import Headers from './containers/common/Headers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Flex, Box } from 'reflexbox'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Flex wrap mb={4}>
            <Box col={12} lg={1} className="b1">Box</Box>
            <Box col={12} lg={1} className="b2">Box</Box>
            <Box col={12} lg={1} className="b3">Box</Box>
            <Box col={12} lg={1} className="b4">Box</Box>
            <Box col={12} lg={1} className="b5">Box</Box>
            <Box col={12} lg={1} className="b6">Box</Box>
            <Box col={12} lg={1} className="b1">Box</Box>
            <Box col={12} lg={1} className="b2">Box</Box>
            <Box col={12} lg={1} className="b3">Box</Box>
            <Box col={12} lg={1} className="b4">Box</Box>
            <Box col={12} lg={1} className="b5">Box</Box>
            <Box col={12} lg={1} className="b6">Box</Box>
          </Flex>
          <Flex wrap>
            <Box col={12} lg={12} mb={6}>
              {this.props.children}
            </Box>
          </Flex>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}
export default App
