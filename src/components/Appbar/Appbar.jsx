import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsLoggedin } from 'components/redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
import { Header, Container } from './Appbar.styled';

import AuthNav from 'components/AuthNav/AuthNav';
const Appbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedin);

  return (
    <>
      <Header>
        <Container>
          <Heading size="md">PhoneBook</Heading>
        </Container>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <main>
        {/* <Suspense fallback={null}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </>
  );
};
export default Appbar;
