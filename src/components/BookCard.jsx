import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div>
            <div className="card bg-base-100 card-md shadow-sm">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{book.title}</h2>
                    <p>{book.author}</p>

                    <div className="justify-end card-actions">
                        <Link href={`/books/${book.id}`}>
                            <button className="btn btn-primary">Show Details</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookCard;