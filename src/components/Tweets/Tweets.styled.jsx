import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Message = styled.p`
  margin-top: 20px;
  font-size: large;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  margin: 2px;
  color: #5cd3a8;
  width: 140px;
  display: flex;
  align-items: center;
`;
