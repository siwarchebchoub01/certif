import React, { useState } from 'react'
import "./Addevent.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addEvent } from '../../Redux/Action/Actionevent'
function Addevent() {

const [name, setname] = useState('')
const [festival, setfestival] = useState('')
const [date, setdate] = useState('')
const [description, setdescription] = useState('')
const [price, setprice] = useState('')
const [image, setimage] = useState()

const navigate = useNavigate()
  const disptach=useDispatch()

const handlesubmit=()=>{


console.log('object');
const data = new FormData();
data.append("name",name )
data.append("festival",festival)
data.append("description",description)
data.append("date", date)
data.append("price",price)
data.append("file",image)
disptach(addEvent(data, navigate))
}


  return (
     
<div className='all'>
  <h1  className='addevent'>Add Event</h1>

    {/* Adjust the action attribute to point to your server-side script for processing the form */}
    <label className='Eventconf'>Event Name:</label>
    <input type="text" className='ktiba'  onChange={(e)=>setname(e.target.value)}   />


    <label className='Eventconf'>Event Date:</label>
    <input type="date"  className='ktiba'   onChange={(e)=>setdate(e.target.value)}   />


    <label className='Eventconf'>description:</label>
    <input type="text" className='ktiba'  onChange={(e)=>setdescription(e.target.value)}    />



    <label className='Eventconf'>Event Location:</label>
    <select type="text"  className='ktiba' onChange={(e)=>setfestival(e.target.value)}  >

    <option  value={'festivaldecarthage'} >festival de carthage </option>
    <option value={'festivaldebizerte'}    >festival de bizerte  </option>
      <option value={'festivaldehammamet'}   > festival de hammamet </option>
    </select>

    <label className='Eventconf'>Event Price</label>
    <input type="text"  className='ktiba'  onChange={(e)=>setprice(e.target.value)}  />


    <label className='Eventconf'>Event Photo:</label>
    <input  type="file" className='ktiba' onChange={(e)=>setimage(e.target.files[0])}    accept="image/*" />


    {/* Add more fields as needed for your specific requirements */}
    <button  onClick={handlesubmit}   className='Eventbo'>Add Event</button>
  
</div>




     
  )
}

export default Addevent