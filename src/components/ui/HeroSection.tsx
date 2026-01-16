import React from 'react'
import Button from './Button'
import { StarIcon } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className='container max-w-7xl py-24 mx-auto flex flex-col items-center justify-center  px-2 border-x border-solid border-neutral-900/5 dark:border-neutral-50/20' >
     <p className='text-brand text-sm font-open-sans font-medium tracking-wide'>For fast moving engineering teams.</p>
          <h1 className='text-6xl font-medium text-center text-balance tracking-tight max-w-3xl mx-auto mt-4 '>
              Manage and simulate agentic <span className='text-brand'>workflows
                   </span>  
          </h1>
          <p className='text-neutral-500 dark:text-neutral-400 text-center text-balance max-w-3xl mx-auto mt-10'>
              We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually
          </p>
          <div className='flex flex-row items-center justify-center gap-4 mt-8'>
            <Button variant='primary'>Start Building</Button>
            <Button variant='outline'>Watch Demo</Button>
          </div>
          <div className='flex flex-row items-center justify-center gap-2 mt-8 divide-x divide-neutral-900/45 dark:divide-neutral-50/20'>
              <div className='flex flex-row items-center justify-center gap-1 px-4'>
                  <StarIcon
                    className='size-4 text-brand fill-brand'
                  />
                  <StarIcon
                    className='size-4 text-brand fill-brand'
                  />
                  <StarIcon
                    className='size-4 text-brand fill-brand'
                  />
                  <StarIcon
                    className='size-4 text-brand fill-brand'
                  />
                  <StarIcon
                    className='size-4 text-brand fill-brand'
                  />
                 
              </div>  
              <div className='flex flex-row items-center justify-center gap-2'>
                  <p className='text-neutral-500 dark:text-neutral-400 text-sm font-open-sans font-medium tracking-wide'>Innovative AI solution 2025 </p>
              </div>

          </div>
    </section>
  )
}

export default HeroSection
