import { useState, useContext, useCallback, memo } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from '@chakra-ui/react';

import CircleButton from '../button/CircleButton';
import AddTodoButton from '../button/AddTodoButton';
import CancelTodoButton from '../button/CancelTodoButton';
import { InCompleteTodoContext } from '../providers/InCompleteTodoProvider';

const AddTodoModal = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { incompleteTodo, setIncompleteTodo } = useContext( InCompleteTodoContext);
  const [todo, setTodo] = useState('');
  const onChangeTodo = useCallback((e) => setTodo(e.target.value), []);
  const onClickAdd = useCallback(() => {
    if (todo === '') return;
    const newTodo = [...incompleteTodo, todo];
    setIncompleteTodo(newTodo);
    setTodo('');
    console.log('incompleteTodoを追加');
  }, [todo]);

  const onClickDelete = useCallback(() => setTodo(''),[todo]);

  return (
    <>
      <CircleButton onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>新規タスクを作成</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="+新しいタスクを入力" value={todo} onChange={onChangeTodo} />
          </ModalBody>

          <ModalFooter>
            <AddTodoButton onClick={onClickAdd} />
            <CancelTodoButton onClick={onClickDelete} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});

export default AddTodoModal;
