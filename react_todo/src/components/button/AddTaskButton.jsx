import { SmallAddIcon } from '@chakra-ui/icons';
import { Circle } from '@chakra-ui/react';

const AddTaskButton = () => {
  return (
    <Circle size="60px" bg="teal" color="white" cursor="pointer" _hover={{ bgColor: 'teal.300' }} transition="0.2s" pos="fixed" bottom={10} right={10}>
      <SmallAddIcon w={8} h={8} />
    </Circle>
  );
};

export default AddTaskButton;
