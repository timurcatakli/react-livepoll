import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import AboutPage from './containers/about/AboutPage'
import HomePage from './containers/home/HomePage'
import PollBuilderContainer from './containers/poll-builder/index'

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="poll-builder" component={PollBuilderContainer} />
  </Route>
)
