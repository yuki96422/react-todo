import {Button} from "@chakra-ui/react"

const CancelTodoButton = (props) => {
  const{onClick} = props;
  return(
    <Button
    bgColor="gray.400"
    color="white"
    borderRadius={10}
    _hover={{ bgColor: 'gray.300' }}
    onClick={onClick}
  >
    修正
  </Button>
  )
}

export default CancelTodoButton;