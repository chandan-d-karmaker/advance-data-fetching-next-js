import React from 'react';

const GetPost = async () => {
    // Easy and fast way
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts =await res.json();

    // Easy and fast way with error handling
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // if(!res.ok){
    //     throw new Error("Failed to load data");
    // }
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