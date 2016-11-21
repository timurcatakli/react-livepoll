import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import {grey200} from 'material-ui/styles/colors'
import {grey400} from 'material-ui/styles/colors'
import {grey700} from 'material-ui/styles/colors'
import Edit from 'material-ui/svg-icons/image/edit'
import DeleteForever from 'material-ui/svg-icons/action/delete-forever'


class PollQuestionPreview extends React.Component {
  render() {
    return (
      <div>
        {this.props.question}
        &nbsp;
        <FlatButton backgroundColor={grey200} hoverColor={grey400} icon={<Edit color={grey700} />} />
        &nbsp;
        <FlatButton backgroundColor={grey200} hoverColor={grey400} icon={<DeleteForever color={grey700} />} />
      </div>
    )
  }
}

export default PollQuestionPreview
