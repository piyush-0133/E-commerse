import React from 'react'
import SHOP_DATA from './shopdata.js'
import ShopPreview from '../components/shopPreview/shopPreview.component'

class shopPage extends React.Component{
    
    constructor(props)
    {
        super(props)
        this.state= {
            collection:SHOP_DATA
        }
    }
    
render(){
 return(
   <div>
        {
            this.state.collection.map(({id,items,...otherProps}) => (
                <ShopPreview key={id} items={items} {...otherProps}/>
            ))    
         }
     </div>        
 )
}
    
}
export default shopPage;