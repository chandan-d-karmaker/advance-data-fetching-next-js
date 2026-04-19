import React from 'react';

export const generateStaticParams = async () => {
    const res = await fetch('http://localhost:6969/books');
    const books = await res.json();

    return books.slice(0, 2).map(book => ({ bookId: book.id }));
}

const BookDetails = async ({ params }) => {

    const { bookId } = await params

    const res = await fetch(`http://localhost:6969/books/${bookId}`);
    const book = await res.json();
    return (
        <div>
            <h2>Details of book {bookId}</h2>
            <div className='card-body bg-base-100 card-md shadow-sm'>
                <h2 className="card-title text-2xl font-bold">{book.title}</h2>
                <p>{book.author}</p>
                <p>{book.description}</p>
                <p className='badge badge-info'>{book.genre}</p>
                <p className='text-2xl font-bold'>Rating: {book.rating}</p>
            </div>
        </div>
    );
};

export default BookDetails;