import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import {cyan500} from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right'
import {fullWhite} from 'material-ui/styles/colors'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ActionHome from 'material-ui/svg-icons/action/home'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'

const style = {
  marginRight: 20
}

const styles = {
  circle: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: 'red',
    padding: 10
  }
}

class PollQuestionForm extends React.Component {
  render() {
    return (
      <div>
        <TextField
          hintText="Hint Text"
          floatingLabelText="Floating Label Text"
        />
        &nbsp;
        <FlatButton label="Secondary" backgroundColor={cyan500} />
        <br />
        <br />
        What is your favorite pizza topping?
        <RaisedButton
      secondary
      icon={<ArrowDropRight />}
    />
      </div>
    )
  }
}

export default PollQuestionForm
