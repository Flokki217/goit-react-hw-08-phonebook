import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { deleteContact } from 'components/redux/contacts/contactOperations';
import { DeleteIcon } from '@chakra-ui/icons';
import { Item } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const formattedPhone = number.replace(/ x\d+$/, '');

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Item>
      {name}: {formattedPhone}
      <Button colorScheme="green" h={7} onClick={handleDelete} ml={3}>
        <DeleteIcon></DeleteIcon>
      </Button>
    </Item>
  );
};

export default ContactListItem;
