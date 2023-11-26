import React, { useEffect } from 'react'
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrent } from '../../Redux/Action/actionUser';
import {  useNavigate } from 'react-router-dom';
function Profile() {
  const dispatch=useDispatch()
  const Navigate=useNavigate()
    const user = useSelector(state => state.userReducer.currentuser)
    console.log(user);
    useEffect(() => {
      dispatch(getCurrent())
    }, [])
    
  console.log(user);
  return (
    <div className='pageprofile'>'
<section className="vh-100"  >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-6 mb-4 mb-lg-0">
        <div className="card mb-3" style={{borderRadius: '.5rem'}}>
          <div className="row g-0">
            <div className="col-md-4 gradient-custom text-center text-white" style={{borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem'}}>
            {user.img ?<img className="PHOTOS" width="150px" src=  {user.img}/>: null}
              <h5>Marie Horwitz</h5>
              
              <i className="far fa-edit mb-5" />
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h6>Information</h6>
                <h1 className="mt-0 mb-4" />
                <div className="row pt-1">
                
                  <div className="col-6 mb-3">
                    <h6>Username</h6>
                    <p className="text22">{user.name}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Email</h6>
                    <p className="ext22">{user.email}</p>
                  </div>
                </div>
                 
                  
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
</div>







    
  )
}

export default Profile