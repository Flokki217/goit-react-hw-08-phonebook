import { logOut } from 'components/redux/auth/authOperations';
import { selectUserEmail } from 'components/redux/auth/authSelectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
  };
  return (
    <Flex alignItems="center" ml={'auto'}>
      <span></span>
      <Button type="button" colorScheme="green" onClick={handleLogOut} ml={5}>
        Logout
      </Button>{' '}
      <Text as="b" ml={1}>
        {' '}
        Wellcome, {email}
      </Text>
    </Flex>
  );
};

export default UserMenu;
