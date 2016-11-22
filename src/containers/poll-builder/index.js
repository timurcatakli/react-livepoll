import React from 'react'
import PollQuestionContainer from './question/PollQuestionContainer'
import { Flex, Box } from 'reflexbox'

const PollBuilderContainer = () => {
  return (
    <Flex wrap>
      <Box col={12} lg={6} pr={1}>
        <PollQuestionContainer />
      </Box>
      <Box col={12} lg={6} className="b3" pl={1}>Box---</Box>
    </Flex>
  )
}

export default PollBuilderContainer
