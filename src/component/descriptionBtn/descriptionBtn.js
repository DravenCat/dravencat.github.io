import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function DescriptionBtn(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let button;
  if (props.videoLink)
    button = (
      <Button colorScheme="green">
        <a href={props.videoLink}>Video demo</a>
      </Button>
    );
  return (
    <div>
      <Button colorScheme="teal" size="sm" ml="10px" onClick={onOpen}>
        description
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.details}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {button}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default DescriptionBtn;
