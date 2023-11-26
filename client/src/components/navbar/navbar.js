import React, { useState } from 'react';
import './navbar.css';
import img from './TicketMagnet1.png'
import { logout } from '../../Redux/Action/actionUser'
import { Link, useNavigate } from 'react-router-dom';
import Panier from '../Panier/Panier';
import { useDispatch } from 'react-redux';
function Navbar() {
const Disptach=useDispatch()
const navigate=useNavigate()
const [toggle, settoggle] = useState(false)

  const token=localStorage.getItem('token')
  return (
  <nav className="nav">


<img src={img} className='lol'   />
   
   
  <div className="nav2">

   <Link  to={'/'}  > <h6 className='Acceuil'>Acceuil</h6></Link>
    <Link to={'/festivaldecarthage'}     ><p   href="#">Festival international<span>de Carthage</span> </p></Link>
   <Link to={"/festivaldebizerte"}    ><p  href="#">Festival international<span>de Bizerte</span> </p></Link> 
    <Link  to={"/festivaldehammamet"}   ><p  href="#">Festival international <span>de hammamet</span></p></Link>

  </div>
  <div className="nav23">
  <i class="fa-regular fa-user"></i>

{ !token ?<Link to={"/Login"}><button >Login</button></Link>:<button   onClick={() => Disptach(logout(),navigate("/"))}  className='logout' >logout </button> }
  <i class="fa-solid fa-pen"></i>
{ !token ?<Link to={"/Registre"}><button >Register</button></Link> :<Link to={"/profile"}><button >profile</button></Link>}
  <i class="fa-solid fa-bag-shopping" onClick={()=>settoggle(!toggle)}    ></i>
 
  </div>
  <div>
    
  </div>
{ toggle?<Panier/>:null}
</nav>

  );
}

export default Navbar;

