// TODO
// React PropTypes
// Alphabetical Sorting

import React from 'react'
import PollQuestionTitle from './PollQuestionTitle'
import PollQuestionForm from './PollQuestionForm'
import PollQuestionPreview from './PollQuestionPreview'
import { Flex, Box } from 'reflexbox'

class PollQuestionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poll: {
        question: null
      }
    }
  }
  render() {
    return (
      <Flex wrap>
        <Box col={12} lg={12}>
          <PollQuestionTitle title="Add Poll Question"/>
        </Box>
        <Box col={12} lg={12}>
          <PollQuestionForm question={this.state.poll.question} onUpdate={this.handleQuestionChange} />
        </Box>
        {this.showPollQuestionPreview()}
      </Flex>
    )
  }
  handleQuestionChange = (question) => {
    console.log(question)
    this.setState({poll: {question: question}})
  }

  showPollQuestionPreview = () => {
    if (this.state.poll.question) {
      return (
        <Box col={12} lg={12} mt={2}>
          <PollQuestionPreview question={this.state.poll.question} />
        </Box>
      )
    }
    return null
  }


}

export default PollQuestionContainer
