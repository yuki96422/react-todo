import { useState ,memo} from 'react';
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
import AddTaskButton from '../button/AddTaskButton';
import CancelTaskButton from '../button/CancelTaskButton';

const AddTaskModal = memo(
  () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
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
  
    return (
      <>
        <CircleButton onClick={onOpen}/>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>新規タスクを作成</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input placeholder="+新しいタスクを入力" value={todo} onChange={onChangeTodo} />
            </ModalBody>
  
            <ModalFooter>
              <AddTaskButton onClick={onClickAdd} />
              <CancelTaskButton onClick={() => setTodo('')} />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
)
export default AddTaskModal;
