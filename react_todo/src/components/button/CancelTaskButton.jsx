import {Button} from "@chakra-ui/react"

const CancelTaskButton = (props) => {
  const{onClick} = props;
  return(
    <Button
    bgColor="gray.400"
    color="white"
    borderRadius={10}
    _hover={{ bgColor: 'gray.300' }}
    onClick={onClick}
  >
    キャンセル
  </Button>
  )
}

export default CancelTaskButton;