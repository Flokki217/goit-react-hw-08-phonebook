import { selectIsLoggedin } from 'components/redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Link } from './Navigation.styled';
import { Box, Center, WrapItem } from '@chakra-ui/react';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedin);
  return (
    <Box ml={6}>
      <nav>
        <Link to="/">
          {' '}
          <WrapItem>
            <Center w="180px" h="60px" bg="green.200">
              Home
            </Center>
          </WrapItem>
        </Link>
        {isLoggedIn && (
          <Link to="contacts">
            <WrapItem>
              <Center w="180px" h="60px" bg="green.200">
                Contacts
              </Center>
            </WrapItem>
          </Link>
        )}
      </nav>
    </Box>
  );
};

export default Navigation;
