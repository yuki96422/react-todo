import { useCallback } from 'react';
import { useToast } from '@chakra-ui/react';

const UseMessage = () => {
  const toast = useToast();
  const showMessage = useCallback(
    (props) => {
      const { status, title } = props;
      toast({
        title,
        status,
        duration: 3000,
        isClosable: true,
      });
    },
    [toast]
  );
  return {showMessage};
};

export default UseMessage;
