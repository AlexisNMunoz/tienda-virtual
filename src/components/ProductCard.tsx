import { useAppStore } from '../store/useAppStore'
import { Product } from '../types'
import { HeartIcon as HeartIconLine } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleClickFavorite = useAppStore((state) => state.handleClickFavorite)
  const favoriteExist = useAppStore((state) => state.favoriteExist)

  return (
    <article className='bg-white p-4 rounded flex items-center flex-col gap-4 border-1 shadow cursor-pointer'>
      <button className='w-full flex flex-row-reverse'>
        {!favoriteExist(product.id) ? (
          <HeartIconLine
            className='w-7 text-slate-500'
            onClick={() => handleClickFavorite(product)}
          />
        ) : (
          <HeartIcon
            className='w-7 text-rose-500'
            onClick={() => handleClickFavorite(product)}
          />
        )}
      </button>

      <div className='w-32 h-48 overflow-hidden flex justify-center hover:scale-110 transition-transform hover:rotate-2'>
        <img
          src={product.image}
          alt={`Imagen de ${product.title}`}
          className='object-contain '
        />
      </div>

      <div className='w-full'>
        <h2 className='text-slate-600 text-center truncate'>{product.title}</h2>
      </div>
    </article>
  )
}
