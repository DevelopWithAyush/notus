'use client'
import { cn } from '@/util/utility'
import { motion } from 'motion/react'
import React from 'react'

const Brands = () => {
    return (
        <section className='container max-w-7xl  mx-auto flex flex-col items-center justify-center border-x border-solid border-neutral-900/5 dark:border-neutral-50/20' >
            <h1 className='text-sm text-neutral-600 py-12 dark:text-neutral-200 font-space-mono font-medium tracking-wide'> Trusted by the world&apos;s best </h1>
            <div className='grid grid-cols-4 w-full  border-t  border-solid border-neutral-900/5 dark:border-neutral-50/20 '>
                <BrandCard className='border-r border-b border-solid border-neutral-900/5 dark:border-neutral-50/20'>
                    <p>
                        Table Mitra
                    </p>
                </BrandCard>
                <BrandCard className='border-r border-b border-solid border-neutral-900/5 dark:border-neutral-50/20'>
                    <p>
                        Table Mitra
                    </p>
                </BrandCard> 
                <BrandCard className='border-r border-b border-solid border-neutral-900/5 dark:border-neutral-50/20'>
                    <p>
                        Table Mitra
                    </p>
                </BrandCard>
                <BrandCard className='border-b border-solid border-neutral-900/5 dark:border-neutral-50/20'>
                    <p>
                        Table Mitra
                    </p>
                </BrandCard>
                <BrandCard className='border-r border-solid border-neutral-900/5 dark:border-neutral-50/20'>
                    <p>
                        Table Mitra
                    </p>
                </BrandCard>
                <BrandCard className='border-r border-solid border-neutral-900/5 dark:border-neutral-50/20'>
                    <p>
                        Table Mitra
                    </p>
                </BrandCard>
                <BrandCard className='border-r border-solid border-neutral-900/5 dark:border-neutral-50/20'>
                    <p>
                        Table Mitra
                    </p>
                </BrandCard>
                <BrandCard className='border-r border-solid border-neutral-900/5 dark:border-neutral-50/20'>
                    <p>
                        Table Mitra
                    </p>
                </BrandCard>
            </div>
            
        </section>
    )
}

export default Brands


const BrandCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('flex col-span-1 flex-col items-center justify-center py-10 relative overflow-hidden group', className)}>
            <motion.div
            
            className='absolute -bottom-full transition-all duration-300 ease-in-out  left-0 w-full h-full bg-brand/5 dark:bg-white/10 group-hover:bottom-0'
            
            />
          
            {children}

        </div>
    )
}