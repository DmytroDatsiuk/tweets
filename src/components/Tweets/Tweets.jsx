import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { Link, Wrapper } from './Tweets.styled';
import { TweetList } from 'components/TweettList/TweetList';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

export const Tweets = () => {
  return (
    <Wrapper>
      <Link to="/">
        <IoArrowBackCircleOutline size={30} />
        Go Back
      </Link>
      <h2>Filter By Status</h2>
      <StatusFilter />
      <TweetList />
    </Wrapper>
  );
};
