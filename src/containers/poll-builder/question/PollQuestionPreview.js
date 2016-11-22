import React, { PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'
import {grey200} from 'material-ui/styles/colors'
import {grey400} from 'material-ui/styles/colors'
import {grey700} from 'material-ui/styles/colors'
import DeleteForever from 'material-ui/svg-icons/action/delete-forever'
import { Flex, Box } from 'reflexbox'

const propTypes = {
  onDelete: PropTypes.func.isRequired,
  question: PropTypes.string
}

class PollQuestionPreview extends React.Component {
  render() {
    return (
      <Flex
        align="baseline"
        justify="flex-end">
        <Box col={12} lg={7}>
          {this.props.question}
        </Box>
        <Box auto className="boxRight">
          <FlatButton
            backgroundColor={grey200}
            hoverColor={grey400}
            onTouchTap={this.handleDelete}
            icon={<DeleteForever color={grey700} />} />
        </Box>
      </Flex>
    )
  }

  handleDelete = () => {
    this.props.onDelete()
  }
}

PollQuestionPreview.propTypes = propTypes
export default PollQuestionPreview
