import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box textAlign="center" py={10} px={6} minH={'100vh'}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, green.400, green.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>

      <Button
        colorScheme="green"
        bgGradient="linear(to-r, green.400, green.500, green.600)"
        color="white"
        variant="solid"
        onClick={() => navigate('/')}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
