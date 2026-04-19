import ProductCard from '@/components/ProductCard';
import React from 'react';

const loadProducts = async () =>{
    const res = await fetch('http://localhost:6969/products', {cache: 'force-cache'});
    return res.json();
}

const ProductPage = async () => {

    const products = await loadProducts();

    return (
        <div>
            <h2>Total Products: {products.length} </h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductPage;