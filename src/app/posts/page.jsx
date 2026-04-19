import GetPost from '@/ContextAPI/GetPosts';
import PostContext from '@/ContextAPI/GetPosts';
import React, { use } from 'react';

const PostPage = async () => {

    const posts = await GetPost();
    // console.log(posts)

    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();
    return (
        <div className='text-center'>
            <h2>Posts are coming sooon...........</h2>
            <p>Total Posts: {posts.length}</p>
        </div>
    );
};

export default PostPage;