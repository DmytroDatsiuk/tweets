import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import {
  DropDown,
  // DropBtn,
  // Dropdown,
  // DropdownContent,
  Link,
  Title,
  TitleOpen,
  TweetsBar,
  VissualllyDrop,
  Wrapper,
} from './Tweets.styled';
import { TweetList } from 'components/TweettList/TweetList';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from 'react-icons/io';

import { useState } from 'react';

export const Tweets = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenBtnClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <Wrapper>
      <TweetsBar>
        <Link to="/">
          <IoArrowBackCircleOutline size={30} />
          Go Back
        </Link>
        <DropDown>
          {openMenu ? (
            <>
              <div onMouseLeave={handleOpenBtnClick}>
                <Title>
                  Filter By Status <IoMdArrowDropdownCircle />
                </Title>
                <VissualllyDrop>
                  <StatusFilter openMenu={openMenu} />
                </VissualllyDrop>
              </div>
            </>
          ) : (
            <>
              <div onMouseEnter={handleOpenBtnClick}>
                <TitleOpen>
                  Filter By Status <IoMdArrowDropupCircle />
                </TitleOpen>
                <VissualllyDrop>
                  <StatusFilter openMenu={openMenu} />
                </VissualllyDrop>
              </div>
            </>
          )}
        </DropDown>
      </TweetsBar>
      <TweetList />
    </Wrapper>
  );
};
