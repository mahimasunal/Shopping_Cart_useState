import React from 'react'
import Button from './Button'
import blue_floral_top from '../assets/blue_floral_top.png'
import grey_flower_peplum_top from '../assets/grey_flower_peplum_top.png'
import olive_zip_jacket from '../assets/olive_zip_jacket.png'
import light_sage_formal_shirt from '../assets/light_sage_formal_shirt.png'
import white_textured_shirt from '../assets/white_textured_shirt.png'
import emerald_knit_sweater from '../assets/emerald_knit_sweater.png'
import army_green_casual_shirt from '../assets/army_green_casual_shirt.png'


const imageMap = {
  'images/blue_floral_top.png': blue_floral_top,
  'images/grey_flower_peplum_top.png': grey_flower_peplum_top,
  'images/olive_zip_jacket.png': olive_zip_jacket,
  'images/light_sage_formal_shirt.png': light_sage_formal_shirt,
  'images/white_textured_shirt.png': white_textured_shirt,
  'images/emerald_knit_sweater.png': emerald_knit_sweater,
  'images/army_green_casual_shirt.png': army_green_casual_shirt,
}


export default function ItemSection({products}) {
    console.log(products)
  return (
        <div className='itemContainer'>
   {products.map(obj=>(
         <div className="card">
            <div className="imgContainer">
                <img src={imageMap[obj.image_url]} alt={obj.product_name}/>
            </div>
            <div className="itemData">
                <p className="itemName">{obj.product_name}</p>
                <p className="price">{obj.price}</p>
                <p className="des">{obj.description}
                </p>
                <footer><Button className = 'cart'>Add to Cart</Button></footer>
                
            
            </div>
         </div>

         
         
   ))}
    </div>
    
    
    
  )
}
