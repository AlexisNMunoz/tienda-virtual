import { Product } from '../types'
import { HeartIcon } from '@heroicons/react/24/outline'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className='bg-white p-4 rounded flex items-center flex-col gap-4 border-1 shadow cursor-pointer'>
      <div className='w-full  flex flex-row-reverse'>
        <HeartIcon
          className='w-7 text-slate-600 cursor-pointer'
          onClick={() => console.log(`Agregaste a favoritos ${product.id}`)}
        />
      </div>

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
