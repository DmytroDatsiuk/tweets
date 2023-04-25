import { Container, Link, Title } from './Home.styled';

export const Home = () => {
  return (
    <>
      <Container>
        <Link to="/tweets">Tweets</Link>
        <Title>Tweets Cards</Title>
      </Container>
    </>
  );
};
