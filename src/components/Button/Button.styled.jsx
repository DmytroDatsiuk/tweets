import styled from 'styled-components';

export const Buttons = styled.button`
  padding: 12px 20px;
  border: 0;
  border-radius: 7px;
  color: white;
  background-color: #3b7c64;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
  }

  &:active {
    background-color: #62afc9;
  }
`;

export const SelectedButton = styled(Buttons)`
  color: white;
  background-color: #056383;
`;
