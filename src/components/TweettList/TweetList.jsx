import {
  List,
  Element,
  UserCard,
  FollowBtn,
  FollowingBtn,
  BgImg,
  Link,
  AvatarImg,
  Avatar,
  DescBox,
  Tweets,
  Following,
} from './TweetList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  downFollow,
  upFollow,
  fetchFirstPageTweets,
  fetchNextPageTweets,
} from 'services/API';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { selectVisibleTweets } from 'redux/selector/selectors';

export const TweetList = () => {
  const [page, setPage] = useState(2);

  const dispatch = useDispatch();
  const tweets = useSelector(selectVisibleTweets);

  useEffect(() => {
    dispatch(fetchFirstPageTweets());
  }, [dispatch]);

  const loader = () => {
    setPage(page + 1);
    dispatch(fetchNextPageTweets(page));
  };

  return (
    <>
      {tweets.length === 0 ? (
        <p>There is no tweets</p>
      ) : (
        <List>
          {tweets?.map(tweet => {
            const { id, tweets, followers, avatar, follow } = tweet;

            const followersCount = followers
              .toString()
              .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');

            return (
              <li key={id}>
                <UserCard>
                  <Link>
                    <img src={require('images/Logo.png')} alt="logo" />
                  </Link>
                  <BgImg
                    src={require('images/picture21.png')}
                    alt="backroun-image"
                  />

                  <AvatarImg src={require('images/Boy.png')} alt="avatar" />
                  <Avatar src={`${avatar}`} alt="avatasr" />
                  <Element></Element>
                  <DescBox>
                    <Tweets>{tweets} tweets</Tweets>
                    <Following>{followersCount} followers</Following>

                    {follow ? (
                      <FollowingBtn
                        type="button"
                        onClick={() => dispatch(downFollow(tweet))}
                      >
                        FOLLOWING
                      </FollowingBtn>
                    ) : (
                      <FollowBtn
                        type="button"
                        onClick={() => dispatch(upFollow(tweet))}
                      >
                        FOLLOW
                      </FollowBtn>
                    )}
                  </DescBox>
                </UserCard>
              </li>
            );
          })}
        </List>
      )}

      {tweets.length !== 0 && <LoadMore loader={loader} />}
    </>
  );
};
