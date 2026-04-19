import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 card-md shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                    <p className='badge badge-info'>{product.inStock? 'In Stock' : 'Out of Stock'}</p>
                    <p className='text-2xl font-bold'>$ {product.price}</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;