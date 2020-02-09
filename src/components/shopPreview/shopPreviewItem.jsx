import React from 'react'
import './shopPreviewItem.styles.scss'

const ShopPreviewItem = ({name,id,imageUrl,price}) =>(
      <div className="collection-item">
        <div className="image"
            style={{backgroundImage:`url(${imageUrl})`}}/>
          <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="name">{price}$</span>
          </div>
      </div>
    
)

export default ShopPreviewItem;