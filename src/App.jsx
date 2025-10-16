import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ItemSection from './components/ItemSection'

const products = [
  {
    product_name: "Blue Floral Printed Cotton Top",
    price: 899,
    description:
      "A comfortable cotton top featuring blue floral prints with a V-neck and three-quarter sleeves. Perfect for casual outings and daily wear.",
    image_url: "images/blue_floral_top.png",
  },
  {
    product_name: "Grey Floral Peplum Cotton Top",
    price: 1099,
    description:
      "An elegant peplum-style cotton top with floral prints and a soft round neckline. Ideal for brunches or casual evenings.",
    image_url: "images/grey_flower_peplum_top.png",
  },
  {
    product_name: "Olive Green Zip-Up Jacket",
    price: 2499,
    description:
      "Stylish olive-green jacket with front zipper and side pockets. Made from durable fabric, perfect for layering in cool weather.",
    image_url: "images/olive_zip_jacket.png",
  },
  {
    product_name: "Light Sage Textured Formal Shirt",
    price: 1599,
    description:
      "A light sage green full-sleeve shirt with a textured pattern and button closure. Suitable for both office and semi-formal occasions.",
    image_url: "images/light_sage_formal_shirt.png",
  },
  {
    product_name: "Classic White Textured Shirt",
    price: 1499,
    description:
      "A crisp white textured shirt designed for comfort and style. Tailored fit with button-down front, ideal for professional or casual wear.",
    image_url: "images/white_textured_shirt.png",
  },
  {
    product_name: "Emerald Green Knit Sweater",
    price: 1999,
    description:
      "A cozy emerald green knitted sweater with a round neck and ribbed pattern. Perfect for chilly days and casual layering.",
    image_url: "images/emerald_knit_sweater.png",
  },
  {
    product_name: "Army Green Casual Shirt",
    price: 1699,
    description:
      "A casual army green shirt with flap pockets and button cuffs. Great for outdoor and everyday wear.",
    image_url: "images/army_green_casual_shirt.png",
  },
];


function App() {

  const[current, setCurrent] = useState(0)

  function handleCurrent(){
    setCurrent(current+1)
  }

  return (
    <div className='main-container'>
     <Header></Header>
     <ItemSection products={products}></ItemSection>
    </div>
  )
}

export default App
