import React, { Component } from "react";
import {
  ChakraProvider,
  Grid,
  Image,
  Text,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { transforms } from "../../constants/motion";

export default class DescriptionCard extends Component {
  render() {
    return (
      <ChakraProvider>
        <Grid
          w="800px"
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={"50px 1fr 40px"}
          gridTemplateColumns={"250px 1fr"}
          borderRadius="15px"
          h="250px"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
          backgroundColor="#6997d0"
          transition={transforms.beforeHover.transition}
          transform={transforms.beforeHover.transform}
          _hover={{
            transform: transforms.onHover.transform,
            boxShadow: transforms.onHover.boxShadow,
          }}
        >
          <GridItem pl="2" area={"header"}>
            <Text>{this.props.name}</Text>
          </GridItem>
          <GridItem pl="2" area={"nav"}>
            <Image src={this.props.imgLink} height="150px" width="200px" />
          </GridItem>
          <GridItem pl="2" area={"main"}>
            <Text>{this.props.description}</Text>
          </GridItem>
          <GridItem pl="2" area={"footer"}>
            <Button colorScheme="teal" size="sm">
              <a href={this.props.sourceLink}>view source code</a>
            </Button>
            <Button colorScheme="teal" size="sm" ml="10px">
              <a>description</a>
            </Button>
            <Button colorScheme="teal" size="sm" ml="10px">
              <a href={this.props.websiteLink}>visit website</a>
            </Button>
          </GridItem>
        </Grid>
      </ChakraProvider>
    );
  }
}
