import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h2`
  padding-left: 24px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  &.visited {
    color: black;
  }

  &:hover,
  &:focus {
    color: red;
    text-decoration: underline;
  }
`;
