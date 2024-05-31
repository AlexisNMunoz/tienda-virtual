import { useEffect, useMemo } from 'react'
import { useAppStore } from '../store/useAppStore'
import ProductCard from './ProductCard'
import SkeletonAnimation from './SkeletonAnimation'

export default function Productos() {
  const products = useAppStore((state) => state.products)
  const favorites = useAppStore((state) => state.favorites)
  const fetchProducts = useAppStore((state) => state.fetchProducts)

  const hasProducts = useMemo(() => products.length, [products])
  const hasFavorites = useMemo(() => favorites.length, [favorites])

  useEffect(() => {
    fetchProducts()
    hasFavorites
  }, [fetchProducts, hasFavorites])

  return (
    <>
      <h2 className='py-16 text-4xl italic text-center text-slate-600  mt-24'>
        Explore la Selección de las Creaciones
      </h2>

      {hasProducts ? (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto w-[90%] content-center gap-4 py-5'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </section>
      ) : (
        <SkeletonAnimation />
      )}
    </>
  )
}
