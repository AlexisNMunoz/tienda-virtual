import { Link, NavLink } from 'react-router-dom'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClickMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header className='bg-white shadow-md fixed top-0 left-0 right-0 z-20'>
        <div className='container flex justify-between mx-auto items-center gap-4 py-8 w-[90%]'>
          <div className='flex md:gap-8 gap-5 items-center'>
            <button>
              <Bars3Icon
                className={`${
                  menuOpen
                    ? 'w-6 h-6 text-gray-600 rotate-90 transition-transform'
                    : 'w-6 h-6 text-gray-600'
                }`}
                onClick={handleClickMenu}
              />
            </button>
            <button className='flex gap-1'>
              <MagnifyingGlassIcon className='w-6 h-6 text-gray-600' />
              <span className='hidden md:block'>Buscar</span>
            </button>
          </div>
          <div>
            <Link to='/'>
              <h2 className='uppercase font-bold text-gray-800 text-2xl break-normal text-center'>
                Marca <span className='italic text-rose-600 '>Lonely</span>
              </h2>
            </Link>
          </div>
          <nav className='flex md:gap-8 gap-5  items-center'>
            <NavLink
              to='/favoritos'
              className={({ isActive }) => (isActive ? 'text-rose-500' : 'text-slate-600')}
            >
              <HeartIcon className='w-7 h-7 md:hidden' />
              <span className='hidden md:block'>Favoritos</span>
            </NavLink>
            <NavLink
              to='/carrito'
              className={({ isActive }) => (isActive ? 'text-rose-500' : 'text-slate-600')}
            >
              <ShoppingBagIcon className='w-7 h-7 md:hidden' />
              <span className='hidden md:block'>Carrito</span>
            </NavLink>
          </nav>
        </div>
        <div className='flex flex-col md:flex-row justify-evenly absolute bg-white my-2 rounded left-4 md:left-16 px-4 shadow-md'>
          {menuOpen && (
            <NavLink
              to='/productos'
              className='capitalize p-2 text-slate-600 cursor-pointer hover:text-rose-500 font-semibold transition-colors'
            >
              Productos
            </NavLink>
          )}
        </div>
      </header>
    </>
  )
}
