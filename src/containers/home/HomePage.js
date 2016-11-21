import React from 'react'
import {Link} from 'react-router'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <p>HomePage class component is working</p>
        <Link to="about">Learn More</Link>
      </div>
    )
  }
}

export default HomePage
