import Layout from '../components/Layouts/Layout';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../hooks/UserContext';

const HomePage = () => {
  const userctx = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/post')
      .then((res) => res.json())
      .then((data: any) => {
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <h1>Home page</h1>
      {userctx?.user.username && <h2>Hi {userctx?.user.username}</h2>}
      <>
        {posts &&
          posts.map((post: any) => {
            return (
              <div key={post.id}>
                <h2>{post.postTitle}</h2>
                <p>{post.postContent}</p>
              </div>
            );
          })}
      </>
    </Layout>
  );
};

export default HomePage;
