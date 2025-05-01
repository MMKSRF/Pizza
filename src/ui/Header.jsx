import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder.jsx'
import Username from '../features/user/Username.jsx'

const Header = () => {
  return (
    <header className="bg-sky-500 uppercase px-4 py-3 border-b border-slate-500 flex items-center justify-between ">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      {/* <p className="text-slate-200">Perez</p> */}
      <Username />
    </header>
  )
}

export default Header
