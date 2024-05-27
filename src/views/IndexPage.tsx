export default function IndexPage() {
  return (
    <section className=''>
      <div className='relative flex w-full h-screen items-center'>
        <div className=' w-full md:h-screen overflow-hidden bg-slate-700 aspect-square pt-24 hidden md:block'>
          <video
            autoPlay
            muted
            playsInline
            loop
            className='opacity-50 z-0 '
          >
            <source
              src='hero.mp4'
              type='video/mp4'
              className=''
            />
          </video>
        </div>
      </div>
    </section>
  )
}
