import Layout from '../components/Layouts/Layout';
import { useContext } from 'react';
import { UserContext } from '../hooks/UserContext';

const HomePage = () => {
  const userctx = useContext(UserContext);

  return (
    <Layout>
      <h1>Home page</h1>
      {userctx?.user.username && <h2>Hi {userctx?.user.username}</h2>}
    </Layout>
  );
};

export default HomePage;
