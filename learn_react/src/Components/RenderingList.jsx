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
        id:3,
        title:'book',
        price:'400'
    }
    ]

    const listItems = products.map((product) => (
    <li key={product.id}>The product is {product.title} and its price is {product.price}.</li>
    ))
    const itemFilter = products.filter((product) => (
      product.price>200
      )).map((product) =>(
        <li key={product.id}>The {product.title} is costly and its price is ({product.price}), greater than 200.</li>
      ))


  return (
    <div>
    <h2>List of products,map</h2>
      <ul>{listItems}</ul>
      <br />
     <h2>List of products,filter</h2>
      <ul>{itemFilter}</ul>
    </div>
  )
}

export default RenderingList
