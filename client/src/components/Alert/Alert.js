import React from 'react'
import { useSelector } from 'react-redux'
import "./Alert.css"
function Alert() {
  const err = useSelector(state => state.userReducer.errors)
  console.log(err);
  return(
  < >
    {err&&err.msg?<p id='err'  >{err.msg}</p>:
    err&& err.errors[0].msg ?   <p id='err'  >{err.errors[0].msg }</p>: 
    err&& err.errors[1].msg? <p id='err'    >{err.errors[1].msg }</p>: null  }
    </>
  )
}

export default Alert