import React, { useState } from 'react'
import './Login.css'
import PHOTO from './TicketMagnet1.png'
import Alert from '../Alert/Alert'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Redux/Action/actionUser';
function Login() {
  const navigate = useNavigate();

  const disptach=useDispatch()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const handleSubmit = (e) => {
  e.preventDefault()
    disptach(login({email,password}, navigate))

      };
      const err = useSelector(state => state.userReducer.errors) 
  return (
    <div  className="page_login" > 


  <div className="container py-5  ">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">
                <div className="text-center">
                <img src={PHOTO} className='logo'/>
                  <h4 className="mt-1 mb-5 pb-1">We are TicketMagnet Team</h4>
                </div>
                <form  onSubmit={handleSubmit}  >
                  <p className='p'>Please login to your account</p>
                  <div className="form-outline mb-4">
                    <input onChange={(e)=>setemail(e.target.value)} type="email" id="form2Example11" className="form-control" placeholder="Phone number or email address" />
                    <label    className="form-label" htmlFor="form2Example11">Email</label>
                  </div>
                  <div className="form-outline mb-4">
                  <input onChange={(e)=>setpassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label   className="form-label" htmlFor="form2Example22"  >Password</label>
                  </div>
                  <div className="text-center pt-1 mb-5 pb-1">
                  <button onClick={handleSubmit} className="botlogin" type="button">Log
                      in</button>
                      {err ? <Alert/>:null}
                  </div>
                  <div className="d-flex align-items-center justify-content-center pb-4">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


    </div>
  )
}

export default Login