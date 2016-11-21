import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import {indigo400} from 'material-ui/styles/colors'
import {indigo800} from 'material-ui/styles/colors'

const styles = {
  mainButton: {
    color: 'white'
  }
}

class PollQuestionForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <TextField hintText="Hint Text" onChange={this.handleOnChange} floatingLabelText="Floating Label Text" />
        &nbsp;
        <FlatButton label="Add" backgroundColor={indigo400} labelStyle={styles.mainButton} hoverColor={indigo800} />
        <br />
        <br />
      </div>
    )
  }

  handleOnChange = (event) => {
    this.props.onUpdate(event.target.value)
  }
}

export default PollQuestionForm
