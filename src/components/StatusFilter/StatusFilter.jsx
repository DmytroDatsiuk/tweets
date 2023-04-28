import { useDispatch, useSelector } from 'react-redux';
import { selectStatusFilter } from 'redux/selector/selectors';
import { setStatusFilter } from 'redux/slices/filterSlice';
import { Item, List, Wrapper, WrapperDown } from './StatusFilter.styled';
import { statusFilters } from 'redux/slices/constants';
import { Button } from 'components/Button/Button';

export const StatusFilter = ({ openMenu }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <>
      {openMenu ? (
        <WrapperDown>
          <List>
            <Item>
              <Button
                selected={filter === statusFilters.all}
                onClick={() => handleFilterChange(statusFilters.all)}
              >
                All
              </Button>
            </Item>
            <Item>
              {' '}
              <Button
                selected={filter === statusFilters.follow}
                onClick={() => handleFilterChange(statusFilters.follow)}
              >
                Follow
              </Button>
            </Item>
            <Item>
              <Button
                selected={filter === statusFilters.followings}
                onClick={() => handleFilterChange(statusFilters.followings)}
              >
                Followings
              </Button>
            </Item>
          </List>
        </WrapperDown>
      ) : (
        <Wrapper>
          <List>
            <Item>
              <Button
                selected={filter === statusFilters.all}
                onClick={() => handleFilterChange(statusFilters.all)}
              >
                All
              </Button>
            </Item>
            <Item>
              {' '}
              <Button
                selected={filter === statusFilters.follow}
                onClick={() => handleFilterChange(statusFilters.follow)}
              >
                Follow
              </Button>
            </Item>
            <Item>
              <Button
                selected={filter === statusFilters.followings}
                onClick={() => handleFilterChange(statusFilters.followings)}
              >
                Followings
              </Button>
            </Item>
          </List>
        </Wrapper>
      )}
    </>
  );
};
