import React, { PropTypes } from 'react'
import Divider from 'material-ui/Divider'

const propTypes = {
  title: PropTypes.string.isRequired
}

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

PollQuestionTitle.propTypes = propTypes
export default PollQuestionTitle
