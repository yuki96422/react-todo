import { useState, useContext, useCallback, memo ,useEffect} from 'react';
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
import { AddIcon } from '@chakra-ui/icons';

import CircleButton from '../button/CircleButton';
import UseMessage from './UseMessage';
import MainButton from '../button/MainButton';
import { InCompleteTodoContext } from '../providers/InCompleteTodoProvider';
import useInitialTodo from '../../hooks/useInitialTodo';

const AddTodoModal = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { incompleteTodo, setIncompleteTodo } = useContext(InCompleteTodoContext);
  const { getTodo, initialTodo } = useInitialTodo();
  useEffect(() => {
    getTodo();
  }, [initialTodo]);

  const { showMessage } = UseMessage();
  const [todo, setTodo] = useState('');
  const onChangeTodo = useCallback((e) => setTodo(e.target.value), []);
  const onClickAdd = useCallback(() => {
    if (todo) {
      const newTodo = [...incompleteTodo, todo];
      setIncompleteTodo(newTodo);
      setTodo('');
    } else {
      showMessage({ status: 'error', title: 'タスクが入力されていません' });
    }
  }, [todo]);

  const onClickDelete = useCallback(() => setTodo(''), [todo]);

  return (
    <>
      <CircleButton onClick={onOpen}>
        <AddIcon />
      </CircleButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>新規タスクを作成</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder={`例:${initialTodo}`} value={todo} onChange={onChangeTodo} />
          </ModalBody>

          <ModalFooter>
            <MainButton bgColor="teal.500" onClick={onClickAdd}>
              追加
            </MainButton>
            <MainButton bgColor="gray.500" onClick={onClickDelete}>
              修正
            </MainButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});

export default AddTodoModal;
