'use client'

import { useState } from "react";
import ProductCarouselCard from "../Cards/ProductCarouselCard";
import CarouselArrow from "../Buttons/CarouselArrow";
import CategoryCarouselCard from "../Cards/CategoryCarouselCard";

export default function Carousel (props: any) {

let itemsLength = props?.items?.length;
let [visibleItems, setVisibleItems] = useState([0,1,2,3])
let arrowClickHandlers = {
  left: () => setVisibleItems(visibleItems.map(item => (item+itemsLength-1)%itemsLength)),
  right: () => setVisibleItems(visibleItems.map(item => (item+itemsLength+1)%itemsLength))
}
return (
  <>
    <CarouselArrow orientation={"Left"} onClick={arrowClickHandlers.left}/>
    {visibleItems.map((item,index) => {
      return (
          props.type == "product" ? 
          <ProductCarouselCard key={index} item={props.items[item]}/> : 
          <CategoryCarouselCard key={index} item={props.items[item]}/>
          )
      } 
    )}
    <CarouselArrow orientation={"Right"} onClick={arrowClickHandlers.right}/>
  </>
)
        
}