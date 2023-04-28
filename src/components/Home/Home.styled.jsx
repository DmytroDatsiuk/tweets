import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #5cd3a8;
  width: 100px;
`;

export const Title = styled.h1`
  margin-top: 20px;
  text-transform: capitalize;
`;
