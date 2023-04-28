import { Link } from './NotFound.styled';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

export const NotFound = () => {
  return (
    <div>
      <Link to="/">
        <IoArrowBackCircleOutline size={30} />
        Go Back
      </Link>
      <h2 style={{ textAlign: 'center' }}>Not Found Page</h2>
    </div>
  );
};
