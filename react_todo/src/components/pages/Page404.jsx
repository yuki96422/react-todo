import { memo } from 'react';
import { Heading, Text } from '@chakra-ui/react';

const Page404 = memo(() => {

  console.log(test());
  return (
    <>
      <Heading as="h1">404 Error</Heading>
      <Text>お探しのページは見つかりません</Text>
    </>
  );
});
export default Page404;
