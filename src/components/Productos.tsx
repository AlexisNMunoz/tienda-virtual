import { useAppStore } from '../store/useAppStore'
import ProductCard from './ProductCard'

export default function Productos() {
  const products = useAppStore((state) => state.products)

  return (
    <>
      <h2 className='md:py-16 text-4xl italic text-center text-slate-600 md:mt-0 mt-24 py-10'>
        Explore la Selección de las Creaciones
      </h2>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto w-[90%] content-center gap-4 py-5'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </section>
    </>
  )
}
