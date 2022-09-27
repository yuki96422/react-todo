import {Button} from "@chakra-ui/react"

const AddTodoButton = (props) => {
  const{onClick} = props;
  return(
    <Button
    bgColor="teal.500"
    color="white"
    borderRadius={10}
    mr={3}
    _hover={{ bgColor: 'teal.300' }}
    onClick={onClick}
  >
    追加
  </Button>
  )

}

export default AddTodoButton;
