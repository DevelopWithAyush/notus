import React from 'react'
import { cn } from '@/util/utility'

const Button = ({ children, className, onClick , variant = 'primary'}: { children: React.ReactNode, className?: string, onClick?: () => void, variant?: 'primary' | 'outline' | 'brand' | 'ghost' | 'danger' }) => { 
    
    const variantClasses = {
        primary: 'bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-xl cursor-pointer hover:bg-brand-dark transition-colors duration-300',
        outline: 'bg-white dark:bg-black text-black dark:text-white border border-neutral-900/7 dark:border-neutral-50/20 px-4 py-2 rounded-xl cursor-pointer hover:bg-brand-light transition-colors duration-300',
        brand: 'bg-brand text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-brand-dark transition-colors duration-300',
        ghost: 'bg-transparent text-neutral-800 px-4 py-2 rounded-xl cursor-pointer hover:bg-brand-light transition-colors duration-300',
        danger: 'bg-red-500 text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-red-600 transition-colors duration-300',
    }

  return (
    <div className={cn(variantClasses[variant], className)} onClick={onClick}> 
      {children}
    </div>
  )
}

export default Button
