import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
} from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';

const AddTaskModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const CircleButtonStyle = {
    background: '#319795',
    cursor: 'pointer',
    color: 'white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    position: 'fixed',
    right: '60px',
    bottom: '60px',
  };

  const [todo, setTodo] = useState('');
  const [incompleteTodo, setIncompleteTodo] = useState([]);

  const onChangeTodo = (e) => setTodo(e.target.value);
  const onClickAdd = () => {
    if (todo === '') return;
    const newTodo = [...incompleteTodo, todo];
    setIncompleteTodo(newTodo);
    setTodo('');
    console.log(incompleteTodo);
  };

  const onClickDelete = () => {
    setTodo('');
  };

  return (
    <>
      <Button onClick={onOpen} style={CircleButtonStyle}>
        <SmallAddIcon w={8} h={8} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>新規タスクを作成</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="+新しいタスクを入力" value={todo} onChange={onChangeTodo} />
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor="teal.500"
              color="white"
              borderRadius={10}
              mr={3}
              _hover={{ bgColor: 'teal.300' }}
              onClick={onClickAdd}
            >
              追加
            </Button>

            <Button
              bgColor="gray.400"
              color="white"
              borderRadius={10}
              _hover={{ bgColor: 'gray.300' }}
              onClick={onClickDelete}
            >
              キャンセル
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTaskModal;
