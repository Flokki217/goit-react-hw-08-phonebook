import { Flex, Heading } from '@chakra-ui/react';

const Home = () => {
  return (
    <Flex justify={'center'} minH={600} align={'center'}>
      <Heading as="h1" size="4xl" noOfLines={1}>
        Greetings in PhoneBook
      </Heading>
    </Flex>
  );
};

export default Home;
