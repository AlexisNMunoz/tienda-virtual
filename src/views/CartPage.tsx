import { useMemo } from 'react'
import { useAppStore } from '../store/useAppStore'
import { NavLink } from 'react-router-dom'

export default function CartPage() {
  const cart = useAppStore((state) => state.cart)
  const hasCartProducts = useMemo(() => cart.length, [cart])

  return (
    <section className='container mx-auto mt-28 w-[90%]'>
      <h2 className='text-xl font-semibold text-rose-500'>Mis Compras</h2>
      <div className='bg-white my-3 shadow-md rounded w-full'>
        <div className='text-center py-5'>
          {hasCartProducts ? (
            <p>Hay productos</p>
          ) : (
            <p>
              ¡No hay{' '}
              <NavLink
                to='/productos'
                className='text-rose-500 font-semibold italic'
              >
                productos
              </NavLink>{' '}
              en el carrito!
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
