import React from 'react'

function ProductBoxModel(props) {
  return (
    <>
        <h1>Name: {props.name}</h1>
        <h1>Unit Price: {props.price}</h1>
        <ul>
            {
                props.points.map(item => <li>{item}</li>)
            }
        </ul>
    </>
  )
}

export default ProductBoxModel