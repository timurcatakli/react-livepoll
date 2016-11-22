import React from 'react'
import Divider from 'material-ui/Divider'

class PollQuestionTitle extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <Divider />
      </div>

    )
  }
}

export default PollQuestionTitle
