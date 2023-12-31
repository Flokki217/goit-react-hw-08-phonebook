import { logIn } from 'components/redux/auth/authOperations';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormLabel,
  Input,
  Button,
  Flex,
  Stack,
  Box,
  Heading,
  Text,
  FormControl,
  ScaleFade,
  Checkbox,
} from '@chakra-ui/react';
import { selectError } from 'components/redux/selectors';
import { Search2Icon } from '@chakra-ui/icons';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <Flex justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign up to account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to find contacts---
            <Search2Icon />
          </Text>
          {error && <Text>Something went wrong, try again!</Text>}
        </Stack>
        <ScaleFade initialScale={0.7} in>
          <Box boxShadow="inner" p="6" rounded="md" bg="white">
            <form onSubmit={handleSubmit}>
              <Stack spacing={4} mb={3}>
                <FormControl>
                  <FormLabel htmlFor={emailInputId}>Email</FormLabel>
                  <Input
                    focusBorderColor="lime"
                    autoComplete="off"
                    type="email"
                    name="email"
                    value={email}
                    required
                    onChange={handleChange}
                    id={emailInputId}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor={passwordInputId}>Password</FormLabel>
                  <Input
                    focusBorderColor="lime"
                    autoComplete="off"
                    type="password"
                    name="password"
                    value={password}
                    required
                    onChange={handleChange}
                    id={passwordInputId}
                  />
                </FormControl>
              </Stack>
              <Stack spacing={8}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox colorScheme="green">Remember me</Checkbox>
                  <Text color={'blue.400'}>Forgot password?</Text>
                </Stack>
                <Button type="submit" colorScheme="green">
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </ScaleFade>
      </Stack>
    </Flex>
  );
};

export default LogIn;
