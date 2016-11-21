import React from 'react'
import { Link, IndexLink } from 'react-router'
import AppBar from 'material-ui/AppBar'

const Headers = () => {
  return (
    <nav>
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <IndexLink to="/">Home</IndexLink>
      {' | '}
      <Link to="/about">About</Link>
      {' | '}
      <Link to="/poll-builder">Poll Builder</Link>
    </nav>
  )
}

export default Headers
