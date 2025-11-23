import React, { useEffect, useState } from 'react'
import  AppwriteService  from '../appwrite/service';
import { Container, Card } from '../components';

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    AppwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className='py-7 w-full'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='px-2'>
              <Card post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
