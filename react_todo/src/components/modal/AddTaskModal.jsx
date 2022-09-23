import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import MainButton from "../button/MainButton"

import AddTaskButton from '../button/AddTaskButton';

const AddTaskModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <AddTaskButton onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            aaaaaa
          </ModalBody>

          <ModalFooter>
            <MainButton colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </MainButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTaskModal;
