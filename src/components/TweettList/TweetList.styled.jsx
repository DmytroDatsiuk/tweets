import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
`;

export const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  width: 214px;
  margin-top: 62px;
  margin-right: auto;
  margin-left: auto;
`;

export const Tweets = styled.p`
  margin-bottom: 16px;
`;

export const Following = styled.p`
  margin-bottom: 26px;
`;

export const Button = styled.button`
  font-size: small;
  background-color: lightblue;
  border: none;
  border-radius: 4px;
  padding: 4px;
  cursor: pointer;

  &:hover {
    background-color: #bce8f8;
  }
  &:active {
    background-color: #87aab6;
  }
`;

export const UserCard = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  background-size: cover;
  /* background-image: url(requre('images/picture21.png')); */
`;

export const Element = styled.div`
  width: 380px;
  height: 8px;
  margin-top: 18px;
  /* margin-bottom: auto; */
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const FollowBtn = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: 0;
  cursor: pointer;
`;

export const FollowingBtn = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: 0;
  cursor: pointer;
`;

export const BgImg = styled.img`
  /* margin-top: 28px; */
  margin-left: auto;
  margin-right: auto;
  padding-top: 28px;
`;

export const Link = styled(NavLink)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const AvatarImg = styled.img`
  position: absolute;
  top: 178px;
  left: 150px;

  width: 80px;
  height: 80px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 185.5px;
  left: 162.3px;
  border-radius: 50%;
  width: 55.5px;
  height: 55.5px;
`;
