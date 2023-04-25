import { useDispatch, useSelector } from 'react-redux';
import { selectStatusFilter } from 'redux/selector/selectors';
import { setStatusFilter } from 'redux/slices/filterSlice';
import { Wrapper } from './StatusFilter.styled';
import { statusFilters } from 'redux/slices/constants';
import { Button } from 'components/Button/Button';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <Wrapper>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.follow}
        onClick={() => handleFilterChange(statusFilters.follow)}
      >
        Follow
      </Button>
      <Button
        selected={filter === statusFilters.followings}
        onClick={() => handleFilterChange(statusFilters.followings)}
      >
        Followings
      </Button>
    </Wrapper>
  );
};
