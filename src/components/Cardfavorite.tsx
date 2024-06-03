import { useAppStore } from '../store/useAppStore'
import { formatCurrency } from '../hooks/formatCurrency'

export default function Cardfavorite() {
  const favorites = useAppStore((state) => state.favorites)
  const handleClickFavorite = useAppStore((state) => state.handleClickFavorite)
  const handleClickCart = useAppStore((state) => state.handleClickCart)
  const cartExist = useAppStore((state) => state.cartExist)

  return (
    <>
      {favorites.map((favorite) => (
        <section
          key={favorite.id}
          className='flex mx-10 md:flex md:flex-row flex-col justify-between space-y-2 border-b-2'
        >
          <div className='px-3 py-4  md:flex md:flex-row flex flex-col gap-8 items-center'>
            <div className='w-24 h-32 flex justify-center overflow-hidden'>
              <img
                src={`${favorite.image}`}
                alt={`Imagen de ${favorite.title}`}
                className='object-contain'
              />
            </div>

            <div className=' flex flex-col items-start space-y-5 w-full'>
              <h2 className=' text-2xl text-slate-700'>{favorite.title}</h2>

              <div className='flex items-start justify-start flex-col gap-2'>
                <p className='text-slate-700'>
                  Precio:{' '}
                  <span className='font-semibold text-slate-700'>
                    {formatCurrency(favorite.price)}
                  </span>
                </p>

                <div className='flex gap-4 '>
                  <button
                    onClick={() => handleClickFavorite(favorite)}
                    className=' text-slate-500 text-sm'
                  >
                    Eliminar de favoritos
                  </button>
                  <button
                    onClick={() => handleClickCart(favorite)}
                    className=' text-rose-500 font-semibold text-sm'
                  >
                    {cartExist(favorite.id) ? 'Quitar del carrito' : 'Agregar al carrito'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
