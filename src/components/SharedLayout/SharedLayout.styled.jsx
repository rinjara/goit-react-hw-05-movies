import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSearchbar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  color: #fff;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(NavLink)`
  margin-right: 20px;
  text-decoration: none;
  color: black;
  font-weight: bold;

  &.active {
    color: red;
  }
  &:hover {
    text-decoration: underline;
  }
`;
