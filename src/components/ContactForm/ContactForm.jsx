import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/contacts/contactOperations';
import { selectContacts } from 'components/redux/selectors';
import { useState } from 'react';
import {
  Box,
  FormLabel,
  Stack,
  Heading,
  Text,
  ScaleFade,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const telInputId = nanoid();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'} textAlign={'center'}>
          This is your PhoneBook
        </Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
          here you can add contacts
        </Text>
      </Stack>
      <ScaleFade initialScale={0.7} in>
        <Box boxShadow="inner" p="6" rounded="md" bg="white">
          <Stack spacing={20} w={'350px'}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <FormLabel htmlFor={nameInputId}>Name</FormLabel>{' '}
                <Input
                  focusBorderColor="lime"
                  type="text"
                  name="name"
                  value={name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  onChange={handleChange}
                  id={nameInputId}
                />{' '}
                <FormLabel htmlFor={telInputId}>Number</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <PhoneIcon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    name="number"
                    value={number}
                    focusBorderColor="lime"
                    pattern="\+?\d{(1, 4)}?[ .\-\s]?\(?\d
                  {(1, 3)}?\)?[ .\-\s]?\d
                  {(1, 4)}[ .\-\s]?\d{(1, 4)}[ .\-\s]?\d{(1, 9)}"
                    title="Phone
                  number must be digits and can contain spaces, dashes,
                  parentheses and can start with +"
                    required
                    onChange={handleChange}
                    id={telInputId}
                  />
                </InputGroup>
                <Button type="submit" colorScheme="green">
                  Add contact
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </ScaleFade>
    </Stack>
  );
};

export default ContactForm;
