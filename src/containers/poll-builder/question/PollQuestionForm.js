import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import { indigo400 } from 'material-ui/styles/colors'
import { indigo800 } from 'material-ui/styles/colors'
import { config } from '../config'

const styles = {
  mainButton: {
    color: 'white'
  }
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
    return (
      <div>
        <TextField
          hintText={config.maxQuestionSizeText}
          floatingLabelText="Poll Question"
          value={this.state.questionValue}
          onChange={this.handleOnChange}
          errorText={this.state.error}
          multiLine
          rows={2}
        />
        {this.state.questionValue.length} Characters
        &nbsp;
        <FlatButton
          label="Add"
          backgroundColor={indigo400}
          labelStyle={styles.mainButton}
          hoverColor={indigo800}
          onClick={this.handleClick}
        />
        <br />
        <br />
      </div>
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

export default PollQuestionForm
