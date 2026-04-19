import React from 'react';

const GetBooks = async () => {

    const res = await fetch("http://localhost:6969/books", { cache: 'no-store' });
    return res.json();

};

export default GetBooks;