import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import '../style/Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://bookstore-api.p.rapidapi.com/books',
      headers: {
        'X-RapidAPI-Key': '23414a571amsh13e5c62f728a5f2p11c640jsn9e127b22ccef',
        'X-RapidAPI-Host': 'bookstore-api.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then((response) => {
        
        setProducts(response.data.books); 
        setLoading(false);

      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []); 

  return (
    <section id="products-page">
      <p className="section-title">OUR PRODUCTS</p>
      <div id="products">
        <ProductFilters />
        {loading ? (
          <p>Loading...</p>
        ) : (
          products.map((item) => <ProductCard key={item.id} product={item} />)
        )}
      </div>
    </section>
  );
}

export default Products;
