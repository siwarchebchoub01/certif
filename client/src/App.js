 
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
 import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Registre from './components/Registre/Registre';
import CardList from './components/CardList/CardList';
import Navbar from './components/navbar/navbar';
 
import EditProfile from './components/EditProfile/EditProfile';
import Descriptionfestival from './components/Descriptionfestival/Descriptionfestival';
import Panier from './components/Panier/Panier';
import Pay from './components/Pay/Pay';
import Addenvent from './components/Addevent/Addenvent';
import Userlist from './components/Userlist/Userlist';
import { useEffect } from 'react';
import { getCurrent } from './Redux/Action/actionUser';
import { useDispatch } from 'react-redux';
import Addevent from './components/Addevent/Addenvent';
import { getALLEvents } from './Redux/Action/Actionevent';
function App() {

const dispatch=useDispatch()
    useEffect(() => {
      dispatch(getCurrent())
      dispatch(getALLEvents())
    }, [])

  return (
    <div>
        <Navbar />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Registre' element={<Registre/>} />
      <Route path='/festivaldecarthage' element={<CardList/>} />
      <Route path='/festivaldebizerte' element={<CardList/>} />
      <Route path='/festivaldehammamet' element={<CardList/>} />
      <Route path='/Editprofile' element={<EditProfile/>} />
      <Route path='/Profile' element={<Profile/>} />
      <Route path='/Description' element={<Descriptionfestival/>} />
      <Route path='/Pay' element={<Pay/>} />
      <Route path='/Addevent' element={<Addevent/>} />
      <Route path='/Userlist' element={<Userlist/>} />

    </Routes>
    </div>
  );
}

export default App;
