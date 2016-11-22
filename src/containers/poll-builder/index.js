import React from 'react'
import { config } from './config'
import PollQuestionContainer from './question/PollQuestionContainer'
import { Flex, Box } from 'reflexbox'
import {Card, CardTitle, CardText} from 'material-ui/Card'

const PollBuilderContainer = () => {
  return (
    <Flex wrap mb={6}>
      <Box col={12} lg={6} px={3}>
        {/* <PollQuestionContainer /> */}
        <Card>
          <CardTitle title="Add Poll Question" titleStyle={config.styles.cardTitleStyle}/>
          <CardText>
            <PollQuestionContainer />
          </CardText>
          <CardTitle title="Add Poll Responses" />
          <CardText>
            <PollQuestionContainer />
          </CardText>
        </Card>
      </Box>
      <Box col={12} lg={6} px={3}>
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
