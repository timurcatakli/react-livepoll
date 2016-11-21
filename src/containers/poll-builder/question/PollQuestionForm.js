import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import {cyan500} from 'material-ui/styles/colors'

class PollQuestionForm extends React.Component {
  render() {
    return (
      <div>
          <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
          />
          <FlatButton label="Secondary" secondary={true} backgroundColor={cyan500} />
        </div>
    )
  }
}

export default PollQuestionForm
