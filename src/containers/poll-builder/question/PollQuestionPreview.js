import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import {grey200} from 'material-ui/styles/colors'
import {grey400} from 'material-ui/styles/colors'
import {grey700} from 'material-ui/styles/colors'
import Edit from 'material-ui/svg-icons/image/edit'
import DeleteForever from 'material-ui/svg-icons/action/delete-forever'
import { Flex, Box } from 'reflexbox'

class PollQuestionPreview extends React.Component {
  render() {
    return (
      <Flex align='baseline' justify="flex-end">
        <Box col={12} lg={7}>
          {this.props.question}
        </Box>
        <Box auto style={{textAlign: 'right'}}>
          <FlatButton backgroundColor={grey200} hoverColor={grey400} icon={<Edit color={grey700} />} />
          &nbsp;
          <FlatButton backgroundColor={grey200} hoverColor={grey400} icon={<DeleteForever color={grey700} />} />
        </Box>
      </Flex>
    )
  }
}

export default PollQuestionPreview
