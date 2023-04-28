import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const TweetsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;
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
  width: 160px;
  display: flex;
  align-items: center;
`;

export const DropDown = styled.div`
  position: relative;
`;

export const VissualllyDrop = styled.div`
  position: absolute;
  top: 30px;
  left: 15px;
  width: 190px;
  height: 169px;
  overflow: hidden;

  border-radius: 0 0 5px 5px;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;

  font-weight: 500;
  font-size: 18px;
  text-align: center;

  padding: 5px;
  background-color: #48a885;
  width: 220px;
  color: #fff;
  border-radius: 5px;

  z-index: 10000;
`;

export const TitleOpen = styled(Title)`
  color: #fafafa;
  background-color: #48a885b7;
`;
