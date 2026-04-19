import React from 'react';

const BookCard = ({book}) => {
    return (
        <div>
            <div className="card bg-base-100 card-md shadow-sm">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{book.title}</h2>
                    <p>{book.author}</p>
                    <p>{book.description}</p>
                    <p className='badge badge-info'>{book.genre}</p>
                    <p className='text-2xl font-bold'>Rating: {book.rating}</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;