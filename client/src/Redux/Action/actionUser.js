 
import { ADD_USER_FAIL, ADD_USER_SUCCESS, GET_ALLUSER_FAIL,GET_CURRENT_SUCCESS,GET_CURRENT_FAIL,LOGOUT, GET_ALLUSER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS } from "../const/ContUser"
import axios from "axios"

export const addUser = (Body,navigate) => async (dispatch) => {
    try {
      const resUser= await axios.post('http://localhost:5000/api/user/register',Body)
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: resUser.data,
     })
   
    navigate('/')
      }
    catch (err) {
      console.log(err)
      dispatch({
        type: ADD_USER_FAIL,
        payload: err.response.data
      });

     }}

     export const login = (body, navigate) => async (dispatch) => {
      try {
          const res = await axios.post("http://localhost:5000/api/user/login", body)
          dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        navigate('/')
    } 
       catch (err) {
          console.log(err);
          dispatch({ 
             type: LOGIN_FAIL,
              payload: err.response.data })

      }}
      
export const getusers = () => async (dispatch) => {
 
  try {
 const res = await axios.get("http://localhost:5000/api/user")
    dispatch({
      type: GET_ALLUSER_SUCCESS,
      payload: res.data
     
    });
   console.log(res.data);
  }

  catch (err) {
    console.log(err)
    dispatch({
      type: GET_ALLUSER_FAIL,
      payload: err.message
    });
  }}




  export const getCurrent = () => async (dispatch) => {
    const token = localStorage.getItem("token");
  
    try {
        const res = await axios.get("http://localhost:5000/api/user/current", { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: GET_CURRENT_SUCCESS, payload: res.data.User })
        console.log(res.data.User);
  
    } catch (error) {
  
        dispatch({ type: GET_CURRENT_FAIL, payload: error })
    }}
    
export const logout = () => {
  return { type: LOGOUT } 
}