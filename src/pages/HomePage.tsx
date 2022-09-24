import Layout from '../components/Layouts/Layout';
import { useContext } from 'react';
import { UserContext } from '../hooks/UserContext';

const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <Layout>
      <h1>Home page</h1>
      {user.username && <h2>Hi {user.username}</h2>}
    </Layout>
  );
};

export default HomePage;
