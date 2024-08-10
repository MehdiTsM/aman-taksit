import React from 'react'

function Electromenager() {
  return (
    <div className='text-2xl md:text-3xl font-semibold text-customDarkGreen m-10'>
                  <ul>
                {products.map(product => (
                    <li key={product.ID}>
                        <h2>{product.title}</h2>
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p><strong>Details:</strong> {product.details}</p>
                        <p><strong>Price:</strong> {product.price}</p>
                        <img src={product.image} alt={product.title} />
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default Electromenager