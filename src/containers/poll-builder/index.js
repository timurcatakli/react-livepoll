import React from 'react'
import PollQuestionContainer from './question/PollQuestionContainer'
import { Flex, Box } from 'reflexbox'

const PollBuilderContainer = () => {
  return (
    <Flex wrap>
      <Box col={12} lg={6} pr={2}>
        <PollQuestionContainer />
      </Box>
      <Box col={12} lg={6} pl={2}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Box>
    </Flex>
  )
}

export default PollBuilderContainer
