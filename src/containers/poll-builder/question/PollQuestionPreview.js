import React, { PropTypes } from 'react'
import DeleteForever from 'material-ui/svg-icons/action/delete-forever'
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

const propTypes = {
  onDelete: PropTypes.func.isRequired,
  question: PropTypes.string
}

class PollQuestionPreview extends React.Component {
  render() {
    return (
      <List>
        <ListItem
          rightAvatar={<Avatar icon={<DeleteForever onTouchTap={this.handleDelete} />} />}
          primaryText={this.props.question}
        />
      </List>
    )
  }

  handleDelete = () => {
    this.props.onDelete()
  }
}

PollQuestionPreview.propTypes = propTypes
export default PollQuestionPreview
