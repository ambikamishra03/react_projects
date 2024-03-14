import React from 'react'

const RenderingList = () => {
    const products = [
    {
        id:1,
        title:'copy',
        price:'250'
    }, 
    {
        id:2,
        title:'pen',
        price:'150'
    }, 
    {
        id:1,
        title:'book',
        price:'400'
    }
    ]

    const listItems = products.map((product) => (
    <li key={product.id}>The product is {product.title} and its price is {product.price}.</li>
    ))
  return (
    <div>
    <h2>List of products</h2>
      <ul>{listItems}</ul>
    </div>
  )
}

export default RenderingList
