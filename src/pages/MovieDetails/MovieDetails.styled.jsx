import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  margin: 10px 0;
`;

export const GoBack = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 5px;
  border: 1px;
`;

export const MoreInfo = styled.section`
  padding-left: 24px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active {
    text-decoration: none;
    color: red;
  }

  &:hover {
    color: red;
    text-decoration: underline;
  }
`;
