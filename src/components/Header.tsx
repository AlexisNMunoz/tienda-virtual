import { Link, NavLink } from 'react-router-dom'
import { Bars3Icon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useMemo, useState } from 'react'
import { useAppStore } from '../store/useAppStore'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const favorites = useAppStore((state) => state.favorites)
  const cart = useAppStore((state) => state.cart)

  const hasFavorites = useMemo(() => favorites.length, [favorites])
  const hasCart = useMemo(() => cart.length, [cart])

  const handleClickMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header className='bg-white shadow-md fixed top-0 left-0 right-0 z-20'>
        <div className='container flex justify-between mx-auto items-center gap-4 py-8 w-[90%]'>
          <div className='flex md:gap-8 gap-5 items-center'>
            <button className=' block sm:hidden z-50'>
              <Bars3Icon
                onClick={handleClickMenu}
                className={`${
                  menuOpen
                    ? 'w-6 h-6 text-gray-600 rotate-90 transition-transform'
                    : 'w-6 h-6 text-gray-600 transition-transform'
                }`}
              />
            </button>

            <div
              className={`bg-white absolute left-0 top-0 h-screen px-8 py-4 w-2/3 shadow-md ${
                menuOpen ? 'left-0' : ' left-[-100%]'
              } duration-500 sm:hidden`}
            >
              <div className='w-full flex flex-col justify-around mt-20'>
                <Link to='/productos'>Productos</Link>
                <div className='flex items-center gap-2'>
                  <Link to='/favoritos'>Favoritos</Link>
                  {favorites.length ? (
                    <div className='flex justify-center w-5 h-5  text-white text-sm font-semibold  bg-rose-500 rounded-full'>
                      <span className='flex items-center'>
                        {favorites.length <= 9 ? favorites.length : '9+'}
                      </span>
                    </div>
                  ) : null}
                </div>
                <Link to='/carrito'>Carrito</Link>
              </div>
            </div>
            <Link
              className='sm:block hidden'
              to='/productos'
            >
              Productos
            </Link>
          </div>

          <div className='z-50'>
            <Link to='/'>
              <h2 className='uppercase font-bold text-gray-800 text-2xl break-normal text-center'>
                Marca <span className='italic text-rose-600 '>Lonely</span>
              </h2>
            </Link>
          </div>
          <nav className='flex md:gap-8 gap-5  items-center'>
            <NavLink
              to='/favoritos'
              className={({ isActive }) =>
                isActive ? 'text-rose-500 relative' : 'text-slate-600 relative'
              }
            >
              <HeartIcon className='w-7 h-7 md:hidden' />
              {hasFavorites ? (
                <span className='md:hidden absolute top-5 right-0 w-2 h-2 bg-rose-500 rounded-full'></span>
              ) : (
                ''
              )}

              <span className='hidden md:block'>Favoritos</span>
            </NavLink>
            <NavLink
              to='/carrito'
              className={({ isActive }) =>
                isActive ? 'text-rose-500 relative' : 'text-slate-600 relative'
              }
            >
              <ShoppingBagIcon className='w-7 h-7 md:hidden' />
              {hasCart ? (
                <span className='md:hidden absolute top-5 right-0 w-2 h-2 bg-rose-500 rounded-full'></span>
              ) : (
                ''
              )}
              <span className='hidden md:block'>Carrito</span>
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}
