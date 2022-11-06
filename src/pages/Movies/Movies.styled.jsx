import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-left: 24px;
`;

export const SearchFormButton = styled.button`
  width: 48px;
  height: 33.5px;
  border: 1;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const StyledInput = styled.input`
  width: 500px;
  font: inherit;
  height: 28px;
  padding-left: 4px;
  padding-right: 4px;
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
