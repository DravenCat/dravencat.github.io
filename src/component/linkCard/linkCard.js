import React, { Component } from "react";
import {
  ChakraProvider,
  LinkBox,
  Heading,
  Text,
  LinkOverlay,
  Box,
} from "@chakra-ui/react";
import { transforms } from "../../constants/motion";

export default class LinkCard extends Component {
  render() {
    return (
      <ChakraProvider>
        <Box p={6}>
          <LinkBox
            boxSize="250"
            borderRadius="lg"
            boxShadow="lg"
            display="flex"
            flexDirection="column"
            color="white"
            background="#5490db"
            fontSize={[`lg`, null, `md`, `1.125rem`, `1.3125rem`]}
            sx={{ textShadow: `0 1px 2px rgba(0, 0, 0, 0.5)` }}
            transition={transforms.beforeHover.transition}
            transform={transforms.beforeHover.transform}
            _hover={{
              transform: transforms.onHover.transform,
              boxShadow: transforms.onHover.boxShadow,
            }}
          >
            <Heading size="lg" margin="5px" mb="10">
              <LinkOverlay href={this.props.link} mb="1em">
                {this.props.name}
              </LinkOverlay>
            </Heading>
            <Text fontSize="lg" padding="5px" ml="5px" mr="5px">
              {this.props.description}
            </Text>
          </LinkBox>
        </Box>
      </ChakraProvider>
    );
  }
}
