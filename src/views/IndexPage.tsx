import { useEffect } from 'react'
import { useAppStore } from '../store/useAppStore'

export default function IndexPage() {
  const fetchProducts = useAppStore((state) => state.fetchProducts)

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <>
      <div className=' relative flex justify-center items-end'>
        <div className='absolute z-10 py-10'>
          <h2 className='  font-black uppercase text-6xl italic text-rose-500'>Lonely</h2>
        </div>
        <div className='w-full overflow-hidden pt-20 hidden md:block bg-slate-800 z-0'>
          <video
            autoPlay
            muted
            playsInline
            loop
            className='opacity-50 '
          >
            <source
              src='hero2.webm'
              type='video/webm'
            />
          </video>
        </div>
      </div>
    </>
  )
}
