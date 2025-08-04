import React, { useState, useEffect, useMemo, useCallback } from 'react';

const mockProducts = [
  { id: 1, name: 'Apple', price: 100 },
  { id: 2, name: 'Banana', price: 50 },
  { id: 3, name: 'Orange', price: 70 },
  { id: 4, name: 'Mango', price: 120 },
];

function Ex1() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // 🟡 useEffect: Simulate fetching products on component mount
  useEffect(() => {
    console.log("🔄 Fetching products...");
    setTimeout(() => {
      setProducts(mockProducts); // simulating API fetch
    }, 1000);
  }, []);

  // 🟣 useCallback: Return a memoized filter function
  const filterProducts = useCallback(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const filteredProducts = filterProducts();

  // 🔵 useMemo: Calculate total price only when filteredProducts change
  const totalPrice = useMemo(() => {
    console.log("🧠 Calculating total price...");
    return filteredProducts.reduce((sum, product) => sum + product.price, 0);
  }, [filteredProducts]);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>Product List</h2>

      <input
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> 

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name} – Rs. {product.price}</li>
        ))}
      </ul>

      <h3>Total Price: Rs. {totalPrice}</h3>
    </div>
  );
}

export default Ex1;
