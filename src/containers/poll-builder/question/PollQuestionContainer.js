import React from 'react'
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
        <PollQuestionForm
          question={this.state.poll.question}
          onUpdate={this.handleQuestionChange} />
        <br /><br />
      {this.showPollQuestionPreview()}
      </div>
    )
  }

  handleQuestionChange = (question) => {
    this.setState({poll: {question: question}})
  }

  showPollQuestionPreview = () => {
    if (this.state.poll.question) {
      return (
        <PollQuestionPreview
          question={this.state.poll.question}
          onDelete={this.handleQuestionDelete} />
      )
    }
    return null
  }

  handleQuestionDelete = () => {
    this.setState({
      poll: {
        question: null
      }
    })
  }
}

export default PollQuestionContainer
