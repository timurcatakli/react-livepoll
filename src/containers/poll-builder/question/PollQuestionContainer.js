import React from 'react'
import PollQuestionTitle from './PollQuestionTitle'
import PollQuestionForm from './PollQuestionForm'

class PollQuestionContainer extends React.Component {
  render() {
    return (
      <div>
        <PollQuestionTitle />
        <PollQuestionForm />
      </div>
    )
  }
}

export default PollQuestionContainer
