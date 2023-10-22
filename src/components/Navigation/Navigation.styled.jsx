import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  background-color:green
  color: black;
  font-weight: 600;
  font-size: 20px;

  &.active {
    color: green;
    text-decoration: underline;
    border: 4px darkgreen solid;
  }


`;
