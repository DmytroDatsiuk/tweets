import styled from 'styled-components';

export const Buttons = styled.button`
  /* width: 200px; */
  padding: 12px 20px;
  border: 0;
  border-radius: 7px;
  color: white;
  background-color: #5cd3a8;
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
