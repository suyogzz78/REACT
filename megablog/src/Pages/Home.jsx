import React, { useState, useEffect } from 'react';
import AppwriteService from '../appwrite/service';
import { Container, Card } from '../components';

function Home() {
  const [posts, setPosts] = useState([]); // initialize as empty array

  useEffect(() => {
    AppwriteService.getPosts().then((res) => {
      if (res) {
        setPosts(res); // ✅ res is already an array of documents
      }
    }).catch((error) => {
      console.error("Failed to fetch posts:", error);
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className='w-full py-8 text-center'>
        <Container>
          <div className='flex flex-wrap'>
            <div className='text-2xl font-semibold hover:text-blue-700'>
              Login to read posts
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className='py-7 w-full'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='px-2'>
              <Card {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
