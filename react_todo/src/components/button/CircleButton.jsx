import { Button } from '@chakra-ui/react';

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
  const { onClick ,children} = props;
  return (
    <Button onClick={onClick} style={CircleButtonStyle} _hover={{ opacity: 0.6 }}>
      {children}
    </Button>
  );
};

export default CircleButton;
