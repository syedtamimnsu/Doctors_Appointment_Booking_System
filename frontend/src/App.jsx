import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './index.css'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Home from './pages/Home'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'




const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      {/* This is for navbar whic will showed in all pages.
      so its used before the routes */}

      <Navbar />



      {/* create all pages routes */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/doctors/:speciality' element={<Doctors />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/my-profile' element={<MyProfile />}/>
        <Route path='/appointment/:doctID' element={<Appointment />}/>
        <Route path='/contact' element={<Contact />} />
    
      </Routes>


      {/* use footer out of routes tag. 
      so that it will visible in all pages */}

      <Footer/>
      
    </div>
    
  )
}

export default App
