import axios from "axios";
import { ADD_ALLEVENT_SUCCESS, ADD_ALLEVENT_FAIL,   GET_ALLEVENT_SUCCESS,   LOADINGOFFERS, ADD_EVENT_SUCCESS } from "../const/ConstEvent";


export const getALLEvents = () => async (dispatch) => {
 
  try {
 const res = await axios.get("http://localhost:5000/api/event")
    dispatch({
      type: GET_ALLEVENT_SUCCESS,
      payload: res.data
    });
  }
  catch (err) {
    console.log(err)
    dispatch({
      type: ADD_ALLEVENT_FAIL,
      payload: err.message
    });
  }}

 
export const addEvent = (Body,navigate) => async (dispatch) => {
    const token=localStorage.getItem('token');
    try {
      
      const resOffer= await axios.post('http://localhost:5000/api/event', Body,{ headers: { Authorization: `Bearer ${token}`} })
      dispatch({
        type: ADD_EVENT_SUCCESS ,
        payload: resOffer.data,
     })
     navigate('/admin')
    }
    catch (err) {
      console.log(err)
      dispatch({
        type: ADD_ALLEVENT_FAIL,
        payload: err.message
      });
    }}
