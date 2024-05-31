import { useAppStore } from '../store/useAppStore'

export default function Cardfavorite() {
  const favorites = useAppStore((state) => state.favorites)
  const handleClickFavorite = useAppStore((state) => state.handleClickFavorite)

  return (
    <>
      {favorites.map((favorite) => (
        <div
          key={favorite.id}
          className='p-3 flex gap-8 mx-10 items-center space-y-2 border-b-2'
        >
          <div className='w-24 object-cover'>
            <img
              src={`${favorite.image}`}
              alt={`Imagen de ${favorite.title}`}
              className=' object-cover'
            />
          </div>
          <div className=' flex flex-col items-start space-y-5'>
            <h2 className=' text-2xl text-slate-700'>{favorite.title}</h2>
            <p className='text-slate-700'>
              Precio: <span className='font-semibold text-slate-700'>{favorite.price}</span>
            </p>
            <div className='flex gap-4'>
              <button
                onClick={() => handleClickFavorite(favorite)}
                className=' text-slate-500 text-sm'
              >
                Eliminar de favoritos
              </button>
              <button className=' text-rose-500 font-semibold text-sm'>Agregar al carrito</button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
