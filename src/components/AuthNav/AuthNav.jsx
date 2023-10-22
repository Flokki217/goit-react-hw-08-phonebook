import { Center, Flex, WrapItem } from '@chakra-ui/react';
import { Link } from 'components/Navigation/Navigation.styled';
const AuthNav = () => {
  return (
    <Flex ml={'auto'}>
      <Link to="/login">
        {' '}
        <WrapItem>
          <Center w="180px" h="60px" bg="green.200">
            Log In
          </Center>
        </WrapItem>
      </Link>
      <Link className="last-child" to="/register">
        <WrapItem>
          <Center w="180px" h="60px" bg="green.200">
            Sing Up
          </Center>
        </WrapItem>
      </Link>
    </Flex>
  );
};

export default AuthNav;
