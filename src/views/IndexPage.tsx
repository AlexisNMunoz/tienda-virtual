export default function IndexPage() {
  return (
    <section>
      <div className='w-full overflow-hidden pt-20 hidden md:block bg-slate-800'>
        <video
          autoPlay
          muted
          playsInline
          loop
          className='opacity-50 '
        >
          <source
            src='hero2.mp4'
            type='video/mp4'
          />
        </video>
      </div>
    </section>
  )
}
