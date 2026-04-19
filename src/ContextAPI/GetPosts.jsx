import Error from 'next/error';
import React from 'react';

const GetPost = async () => {
    // Easy and fast way
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts =await res.json();

    // professional way
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await res.json();
        return posts;


    }
    catch (error) {
        throw new Error("Faild to load data");
    }
};

export default GetPost;