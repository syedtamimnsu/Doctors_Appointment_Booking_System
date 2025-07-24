import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets_admin/assets'
import { AdminContext } from '../context/AdminContext'

const Navbar = () => {

  const {aToken, setAToken} = useContext(AdminContext)

  const navigate = useNavigate()
  const logout = () => {
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem(aToken)
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b border-white bg-white'>
      <div className='flex items-center gap-2 text-xl'>
        <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
        <p className='border px2.2
         py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>

      <button onClick={logout} className='bg-[#5F6FFF] text-white text-sm px-10 py-2 rounded-full cursor-pointer hover:scale-105 transition-all'>Logout</button>
    </div>
  )
}

export default Navbar
