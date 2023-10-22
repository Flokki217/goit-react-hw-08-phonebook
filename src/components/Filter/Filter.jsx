import { changeFilter } from 'components/redux/filter/filterSlice';
import { selectFilter } from 'components/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, FormLabel, Input } from '@chakra-ui/react';

const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <Flex justifyContent={'center'}>
      <FormLabel>
        Find contact by name
        <Input
          variant="filled"
          focusBorderColor="lime"
          placeholder="Find your contact"
          type="text"
          value={filter}
          onChange={handleFilterChange}
          borderColor={'green.200'}
        />
      </FormLabel>
    </Flex>
  );
};

export default Filter;
