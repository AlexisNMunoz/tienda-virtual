import { useMemo } from 'react'
import { useAppStore } from '../store/useAppStore'
import Cardfavorite from '../components/Cardfavorite'
import { NavLink } from 'react-router-dom'

export default function FavoritePage() {
  const favorites = useAppStore((state) => state.favorites)
  const hasFavorites = useMemo(() => favorites.length, [favorites])

  return (
    <section className='container mx-auto mt-28 w-[90%]'>
      <h2 className='text-xl font-semibold text-rose-500'>Mis favoritos</h2>
      <div className='bg-white my-3 shadow-md rounded w-full'>
        <div className='text-center py-5'>
          {hasFavorites ? (
            <Cardfavorite />
          ) : (
            <p>
              ¡No hay{' '}
              <NavLink
                to='/productos'
                className='text-rose-500 font-semibold italic'
              >
                productos
              </NavLink>{' '}
              en favoritos!
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
