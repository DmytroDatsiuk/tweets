import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Tweets } from 'components/Tweets/Tweets';
import { Loader } from 'components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from 'components/Layout';
import { GlobalStyle } from 'components/GlobalStyele';
import { Home } from 'components/Home/Home';
import { NotFound } from './NotFound/NotFound';

export const App = () => {
  const isLoadingTweets = useSelector(state => state.items.isLoading);

  return (
    <Layout>
      <GlobalStyle />
      {isLoadingTweets && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={1000} />
    </Layout>
  );
};
