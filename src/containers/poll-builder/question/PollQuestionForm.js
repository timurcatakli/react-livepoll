import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import {indigo400} from 'material-ui/styles/colors'
import {indigo800} from 'material-ui/styles/colors'
import {grey200} from 'material-ui/styles/colors'
import {grey400} from 'material-ui/styles/colors'
import {grey700} from 'material-ui/styles/colors'
import Edit from 'material-ui/svg-icons/image/edit'
import DeleteForever from 'material-ui/svg-icons/action/delete-forever'

const styles = {
  mainButton: {
    color: 'white'
  }
}

class PollQuestionForm extends React.Component {
  render() {
    return (
      <div>
        <TextField hintText="Hint Text" floatingLabelText="Floating Label Text" />
        &nbsp;
        <FlatButton label="Add" backgroundColor={indigo400} labelStyle={styles.mainButton} hoverColor={indigo800} />
        <br />
        <br />
        What is your favorite pizza topping?
        &nbsp;
        <FlatButton backgroundColor={grey200} hoverColor={grey400} icon={<Edit color={grey700} />} />
        &nbsp;
        <FlatButton backgroundColor={grey200} hoverColor={grey400} icon={<DeleteForever color={grey700} />} />
      </div>
    )
  }
}

export default PollQuestionForm
