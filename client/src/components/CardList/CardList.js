import React from 'react'
import Card from "../Card/Card"
import './CardList.css';
import { useSelector } from 'react-redux';
function Cardlist() {

  const url=window.location.pathname.slice(1)

  console.log(url);
 const event=useSelector(state=>state.productReducer.products)
 console.log(event);
  const eventbyfestival=event.filter(el=>el.festival==url)
  console.log(eventbyfestival);



  return (
    <>
    <div className='image_fes'  >

    </div>
    <div  className='parent'   >
    
    {eventbyfestival.map((el)=> <Card el={el}   />)}
    </div>
    </>
  )
}

export default Cardlist