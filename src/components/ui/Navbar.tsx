'use client'
import Link from 'next/link'
import Button from './Button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const navItems = [
        {
            label: 'Pricing',
            href: '/'
        },
        {
            label: 'About',
            href: '/about'
        },
        {
            label: 'Careers',
            href: '/careers'
        },
        {
            label: 'Blog',
            href: '/blog'
        },
    ] 
            const [isDarkMode, setIsDarkMode] = useState(false)
            useEffect(() => {
                document.documentElement.classList.toggle('dark', isDarkMode) 
                // localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
            }, [isDarkMode])
    return (
        <nav className='border-b border-solid border-neutral-900/5 dark:border-b-neutral-50/20 w-full sticky top-0 z-50 bg-white dark:bg-black '>
            <div className=' container max-w-7xl mx-auto flex flex-row justify-between items-center py-4 px-2  '>
                <div className='flex items-center gap-2'>
                    <Logo />
                    <h1 className='text-2xl font-medium'>Notus</h1>
                </div>
                <ul className='flex items-center gap-10'>
                    {navItems.map((item) => (
                        <li className='text-neutral-500 hover:text-neutral-900 dark:text-neutral-100 dark:hover:text-neutral-200 transition-colors duration-300' key={item.href}>
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center gap-2'> 
                    <Button variant='ghost' className='relative' onClick={() => setIsDarkMode(!isDarkMode)}>
                        <SunIcon className="absolute inset-0 size-4 shrink-0 text-neutral-500 dark:scale-0 scale-100 dark:rotate-45 transition-all duration-300 m-auto" />
                        <MoonIcon className="absolute inset-0 size-4 shrink-0 dark:text-neutral-200 dark:scale-100 scale-0 dark:rotate-0 rotate-45 transition-all duration-300 m-auto" />
                    </Button>
                    <Button variant='primary'>Start Building</Button>
              
                </div>
            </div>





        </nav>
    )
}

export default Navbar


export const Logo = () => {
    return (
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4.5C0 3.11929 1.11929 2 2.5 2H7.5C8.88071 2 10 3.11929 10 4.5V9.40959C10.0001 9.4396 10.0002 9.46975 10.0002 9.50001C10.0002 10.8787 11.1162 11.9968 12.4942 12C12.4961 12 12.4981 12 12.5 12H17.5C18.8807 12 20 13.1193 20 14.5V19.5C20 20.8807 18.8807 22 17.5 22H12.5C11.1193 22 10 20.8807 10 19.5V14.5C10 14.4931 10 14.4861 10.0001 14.4792C9.98891 13.1081 8.87394 12 7.50017 12C7.4937 12 7.48725 12 7.48079 12H2.5C1.11929 12 0 10.8807 0 9.5V4.5Z" fill="currentColor"></path>
        </svg>
    )
}