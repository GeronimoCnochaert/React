import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <h3 className='ItemListContainer'>{greeting}</h3>
    )
}

export default ItemListContainer
