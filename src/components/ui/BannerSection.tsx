import React from 'react'

const BannerSection = () => {
  return (
    <section className=' container relative bg-neutral-500/5 max-w-7xl p-8 mx-auto flex flex-col items-center justify-center  border-x border-solid border-neutral-900/5 dark:border-neutral-50/20' >
        <div className='absolute -left-2 -top-2 w-2 h-2 bg-brand'/>
        <div className='absolute -right-2 -top-2 w-2 h-2 bg-brand'/>
        <div className='absolute -left-2 -bottom-2 w-2 h-2 bg-brand'/>
        <div className='absolute -right-2 -bottom-2 w-2 h-2 bg-brand'/>
        
          <div className='w-full h-[700px]  rounded-xl relative border border-solid border-neutral-900/5 dark:border-neutral-50/20'>
            
              <div className="absolute inset-0 z-10 m-auto h-full w-full rounded-lg border border-neutral-900/5 dark:border-neutral-50/20 bg-white bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] dark:bg-neutral-900 opacity-10"></div>
          </div>
    </section>
  )
}

export default BannerSection