import { Button } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';

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

const CircleButton = (props) => {
  const {onClick} = props;
  return (
    <Button onClick={onClick} style={CircleButtonStyle}>
      <SmallAddIcon w={8} h={8} />
    </Button>
  );
};

export default CircleButton;
