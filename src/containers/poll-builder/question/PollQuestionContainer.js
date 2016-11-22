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
        {this.showPollQuestionPreview()}
      </div>
    )
  }
  handleQuestionChange = (question) => {
    console.log(question)
    this.setState({poll: {question: question}})
  }

  showPollQuestionPreview = () => {
    if (this.state.poll.question) {
      return <PollQuestionPreview question={this.state.poll.question} />
    }
    return null
  }


}

export default PollQuestionContainer
