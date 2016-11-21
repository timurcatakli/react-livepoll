// TODO
// React PropTypes
// Alphabetical Sorting

import React from 'react'
import PollQuestionTitle from './PollQuestionTitle'
import PollQuestionForm from './PollQuestionForm'
import PollQuestionPreview from './PollQuestionPreview'

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
      <div>
        <PollQuestionTitle title="Add Poll Question"/>
        <PollQuestionForm question={this.state.poll.question} onUpdate={this.handleQuestionChange} />
        <PollQuestionPreview question={this.state.poll.question} />
      </div>
    )
  }
  handleQuestionChange(question) {
    console.log(question)
  }
}

export default PollQuestionContainer
