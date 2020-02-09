import React from 'react'
import './shopPreview.styles.scss'
import ShopPreviewItem from './shopPreviewItem'

const shopPreview = ({id,title,items,imageUrl}) => (
    <div className="collection-preview">
     <div className="title">{title}</div>
      <div className="preview">
         {
            items.filter((item,index)=> index <4).map(({id,...otherItemsProps})=>(
         <ShopPreviewItem key={id} {...otherItemsProps} />
            ))}
      </div>
    </div>
    
)
export default shopPreview;