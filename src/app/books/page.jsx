import BookCard from '@/components/BookCard';
import GetBooks from '@/ContextAPI/GetBooks';
import React from 'react';

const BooksPage = async () => {

    const books = await GetBooks();
    
    return (
        <div>
            <h1>Books are here</h1>
            <h1>Total books : {books.length}</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksPage;