import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import { indigo400 } from 'material-ui/styles/colors'
import { indigo800 } from 'material-ui/styles/colors'
import { config } from '../config'
import { Flex, Box } from 'reflexbox'

const styles = {
  mainButton: {
    color: 'white'
  }
}

const propTypes = {
  onUpdate: PropTypes.func
}

class PollQuestionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questionValue: '',
      error: null
    }
  }

  render() {
    let labelText = 'Poll Question'
    const {questionValue} = this.state
    if (questionValue.length > 0) {
      labelText = `${labelText} - ${config.maxQuestionSize - questionValue.length} chars left...`
    }
    return (
      <Flex align="flex-end">
        <Box col={12} lg={9}>
          <TextField
            hintText={config.maxQuestionSizeText}
            floatingLabelText={labelText}
            value={questionValue}
            onChange={this.handleOnChange}
            errorText={this.state.error}
            fullWidth
            multiLine
          />
        </Box>
        <Box col={12} lg={3}>
          <FlatButton
            label="Add"
            backgroundColor={indigo400}
            labelStyle={styles.mainButton}
            hoverColor={indigo800}
            onClick={this.handleClick}
            style={{float: 'right'}}
          />
        </Box>
      </Flex>
    )
  }

  handleOnChange = (event) => {
    if (event.target.value.length <= config.maxQuestionSize) {
      this.setState({
        questionValue: event.target.value,
        error: null
      })
    }
  }
  handleClick = () => {
    if (this.state.questionValue) {
      this.props.onUpdate(this.state.questionValue)
      this.setState({
        questionValue: '',
        error: null
      })
    } else {
      this.setState({error: config.formErrors.e1})
    }
  }
}

PollQuestionForm.propTypes = propTypes
export default PollQuestionForm
