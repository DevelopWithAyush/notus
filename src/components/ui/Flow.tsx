'use client'
import { cn } from '@/util/utility'
import { LayoutGridIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useState } from 'react'
import VerticalDeployTimeline from './VerticalDeployTimeline'

const Flow = () => {

    const items = [
        {
            title: 'Create a new workflow',
            description: 'Create a new workflow by clicking the Create a new workflow by clicking the Create a new workflow by clicking the .',
        },
        {
            title: 'Create a new workflow',
            description: 'Create a new workflow by clicking the &quot;New Workflow&quot; button create a new workflow by clicking the &quot;New Workflow&quot; button.',
        },
        {
            title: 'Create a new workflow',
            description: 'Create a new workflow by clicking the &quot;New Workflow&quot; button create a new workflow by clicking the &quot;New Workflow&quot; button.',
        },
    ]

    const [activeItem, setActiveItem] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveItem((prev) => prev === items.length - 1 ? 0 : prev + 1)
        }, 7000)
        return () => clearInterval(interval)
    }, [])
    return (
        <section className='container max-w-7xl  mx-auto flex flex-col items-center justify-center border-x border-solid border-neutral-900/5 dark:border-neutral-50/20' >
            <div className='flex flex-col items-center justify-center py-16'>
                <p className='text-brand text-sm font-open-sans font-medium tracking-wide'>How it works</p>
                <h1 className='text-4xl font-normal text-center text-balance tracking-tight max-w-3xl mx-auto mt-4 '>
                    Integrates easily
                </h1>
                <p className='text-neutral-500 dark:text-neutral-400  text-center text-balance max-w-3xl mx-auto mt-6'>
                    We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually</p>

            </div>
            <div className='grid grid-cols-2 w-full divide-x divide-neutral-900/5 dark:divide-neutral-50/20  border-t border-solid border-neutral-900/5 dark:border-neutral-50/20 '>
                <div className='w-full flex flex-col items-start justify-start divide-y divide-neutral-900/5 dark:divide-neutral-50/20  '>
                    {items.map((item, index) => (
                        <FlowItem isActive={index === activeItem} key={index} title={item.title} description={item.description} />
                    ))}
                </div>
                <div className='w-full h-full relative flex justify-center   mask-radial-from-10% '>
                    <div className="absolute inset-0 bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] mask-radial-from-0%  [background-size:10px_10px] shadow-xl opacity-20"></div>

                    {/* <AnimatePresence>
                        <motion.div key={activeItem}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5, ease: 'easeInOut',
                                delay: 0.3,
                                staggerChildren: 0.3
                            }}
                        > */}
                    <FlowItem1 />
                    {/* </motion.div> */}
                    {/* </AnimatePresence> */}
                </div>
            </div>

        </section>
    )
}

export default Flow



const FlowItem = ({ isActive, title, description }: { isActive: boolean, title: string, description: string }) => {
    return (
        <button className={cn('w-full relative p-8 flex flex-col items-start justify-start  cursor-pointer group hover:bg-neutral-400/5 dark:hover:bg-neutral-400/10 transition-all duration-300 overflow-hidden', isActive ? 'bg-neutral-400/5 dark:bg-neutral-400/10' : 'bg-transparent dark:bg-transparent')}>

            <motion.div key={title}
                initial={{ width: 0 }}
                animate={{ width: isActive ? '100%' : 0 }}
                transition={{ duration: isActive ? 7 : 0, ease: 'easeInOut' }}
                className='absolute inset-x-0 bottom-0 h-px bg-brand' />




            <div className={cn('flex items-center gap-2 group-hover:text-brand transition-all duration-300', isActive ? 'text-brand' : 'text-neutral-600 dark:text-neutral-400')}>
                <LayoutGridIcon className={cn('size-4 text-neutral-600 dark:text-neutral-400 shrink-0 group-hover:text-brand transition-all duration-300', isActive ? 'text-brand dark:text-brand' : 'text-neutral-600 dark:text-neutral-400')} />
                <h3 className={cn(' font-medium text-neutral-600 dark:text-neutral-100 font-open-sans text-balance group-hover:text-brand transition-all duration-300', isActive ? 'text-brand dark:text-brand' : 'text-neutral-600 dark:text-neutral-400')}>
                    {title}
                </h3>
            </div>
            <p className={cn(' text-sm text-neutral-500 dark:text-neutral-400 font-light text-left ')}>
                {description}
            </p>
        </button>
    )
}


const FlowItem1 = () => {
    return (
        <div className="mt-12 flex flex-col items-center">
            <div className="relative">
                <div className="relative h-full text-xs opacity-100 transform-none shadow-sm rounded-lg">
                    <div className="absolute inset-x-0 -top-1.5 mx-auto size-3 rounded-full border-2 border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900"></div>
                    <div className=" relative z-20 flex w-54 shrink-0 flex-col items-start rounded-lg bg-white dark:bg-neutral-900" style={{ transform: 'none' }}>
                        <div className="flex w-full items-center justify-between p-2 md:p-4"><div className="flex items-center gap-2 font-medium">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.0318 8.08621C3.0318 8.78366 2.46811 9.34735 1.77066 9.34735C1.07321 9.34735 0.509521 8.78366 0.509521 8.08621C0.509521 7.38876 1.07321 6.82507 1.77066 6.82507H3.0318V8.08621Z" fill="#E01E5A"></path>
                                <path d="M3.66235 8.08621C3.66235 7.38876 4.22604 6.82507 4.92349 6.82507C5.62094 6.82507 6.18463 7.38876 6.18463 8.08621V11.2391C6.18463 11.9365 5.62094 12.5002 4.92349 12.5002C4.22604 12.5002 3.66235 11.9365 3.66235 11.2391L3.66235 8.08621Z" fill="#E01E5A"></path>
                                <path d="M4.92374 3.02253C4.22629 3.02253 3.6626 2.45883 3.6626 1.76139C3.6626 1.06394 4.22629 0.500244 4.92374 0.500244C5.62119 0.500244 6.18488 1.06394 6.18488 1.76139V3.02253H4.92374Z" fill="#36C5F0"></path>
                                <path d="M4.92355 3.66284C5.621 3.66284 6.18469 4.22653 6.18469 4.92398C6.18469 5.62143 5.621 6.18512 4.92355 6.18512H1.76114C1.06369 6.18512 0.5 5.62143 0.5 4.92398C0.5 4.22653 1.06369 3.66284 1.76114 3.66284L4.92355 3.66284Z" fill="#36C5F0"></path>
                                <path d="M9.97852 4.92386C9.97852 4.22641 10.5422 3.66272 11.2397 3.66272C11.9371 3.66272 12.5008 4.22641 12.5008 4.92386C12.5008 5.62131 11.9371 6.185 11.2397 6.185H9.97852V4.92386Z" fill="#2EB67D"></path>
                                <path d="M9.34723 4.92379C9.34723 5.62124 8.78354 6.18493 8.08609 6.18493C7.38864 6.18493 6.82495 5.62124 6.82495 4.92379V1.76139C6.82495 1.06394 7.38864 0.500244 8.08609 0.500244C8.78354 0.500244 9.34723 1.06394 9.34723 1.76139V4.92379Z" fill="#2EB67D"></path>
                                <path d="M8.08609 9.97803C8.78354 9.97803 9.34723 10.5417 9.34723 11.2392C9.34723 11.9366 8.78354 12.5003 8.08609 12.5003C7.38864 12.5003 6.82495 11.9366 6.82495 11.2392V9.97803H8.08609Z" fill="#ECB22E"></path>
                                <path d="M8.08609 9.34735C7.38864 9.34735 6.82495 8.78366 6.82495 8.08621C6.82495 7.38876 7.38864 6.82507 8.08609 6.82507H11.2485C11.9459 6.82507 12.5096 7.38876 12.5096 8.08621C12.5096 8.78366 11.9459 9.34735 11.2485 9.34735H8.08609Z" fill="#ECB22E"></path>
                            </svg>
                            Slack
                        </div>
                            <p className="font-mono text-gray-600">#standups</p>
                        </div><div className="bg-divide h-px w-full"></div>
                        <div className="m-4 rounded-sm border px-2 py-0.5 border-blue-500 bg-blue-50 text-blue-500 dark:bg-blue-50/10 dark:text-blue-500">Connected</div>
                    </div>
                </div>
                <svg width="128" height="97" viewBox="0 0 128 97" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-12 -left-32 " style={{ opacity: 1 }}>

                    <path d="M127.457 0.0891113L127.576 95.9138L127.457 0.0891113ZM-0.0609919 96.0731L-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L1.93901 96.0706L-0.0609919 96.0731ZM-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L127.455 -0.910888L127.458 1.08911L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L-0.160632 16.2484ZM127.576 95.9138L0.939007 96.0718L127.576 95.9138Z"  className="dark:fill-neutral-900 fill-neutral-500/20" ></path>
                    <path d="M127.457 0.0891113L127.576 95.9138L127.457 0.0891113ZM-0.0609919 96.0731L-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L1.93901 96.0706L-0.0609919 96.0731ZM-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L127.455 -0.910888L127.458 1.08911L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L-0.160632 16.2484ZM127.576 95.9138L0.939007 96.0718L127.576 95.9138Z" fill="url(#gradient-one)"></path>
                    {/* <rect x="0" y="0" width="128" height="97" fill="url(#gradient-one)"></rect> */}
                    <defs>
                        <motion.linearGradient
                            id="gradient-one"
                            gradientUnits="objectBoundingBox" // percentages 0–100% of the stroked path’s box
                            initial={{
                                // beam starts at the right, horizontal
                                x1: "100%", y1: "0%",
                                x2: "80%", y2: "0%",
                            }}
                            animate={{
                                // 1) move left towards the corner
                                // 2) short "turn band" where both x & y change (rounds the corner)
                                // 3) go down vertically
                                x1: ["120%", "20%", "0%", "0%"],
                                x2: ["100%", "0%", "0%", "0%"],
                                y1: ["0%", "0%", "0%", "100%"],
                                y2: ["0%", "0%", "20%", "120%"],
                            }}
                            transition={{
                                duration: 2,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "loop",
                                // timings tuned for smooth corner (adjust if your corner sits earlier/later)
                                times: [0, 0.58, 0.64, 1],
                                // delay: 5,
                                repeatDelay: 5,

                            }}
                        >
                            <stop offset="0" stopColor="transparent" />
                            {/* <stop offset="0.33" stopColor="red" /> */}
                            <stop offset="0.66" stopColor="red" />
                            <stop offset="1" stopColor="transparent" />
                        </motion.linearGradient>
                    </defs>
                </svg>
                <svg width="128" height="96" viewBox="0 0 128 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-12 -right-32" style={{ opacity: 1 }}>
                    <path d="M0.619629 0L0.500018 95.8247L0.619629 0ZM128.137 95.984L128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L126.137 95.9815L128.137 95.984ZM128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L0.620877 -0.999999L0.618381 0.999999L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L128.237 16.1593ZM0.500018 95.8247L127.137 95.9827L0.500018 95.8247Z"  className='dark:fill-neutral-900 fill-neutral-500/20'></path>
                    <path d="M0.619629 0L0.500018 95.8247L0.619629 0ZM128.137 95.984L128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L126.137 95.9815L128.137 95.984ZM128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L0.620877 -0.999999L0.618381 0.999999L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L128.237 16.1593ZM0.500018 95.8247L127.137 95.9827L0.500018 95.8247Z" fill="url(#gradient-two)" ></path>
                    {/* <rect x="0" y="0" width="128" height="96" fill="url(#gradient-two)" ></rect> */}
                    
                    <defs>
                        <motion.linearGradient
                            id="gradient-two"
                            gradientUnits="objectBoundingBox"

                            x1="80%"
                            x2="100%"
                            y1="0%"
                            y2="0%"

                            initial={{
                                // beam starts at the right, horizontal
                                x1: "-20%", y1: "0%",
                                x2: "0%", y2: "0%",
                            }}
                            animate={{
                                // 1) move left towards the corner
                                // 2) short "turn band" where both x & y change (rounds the corner)
                                // 3) go down vertically
                                x1: ["-20%", "80%", "100%", "100%"],
                                x2: ["0%", "100%", "100%", "100%"],
                                y1: ["0%", "0%", "0%", "100%"],
                                y2: ["0%", "0%", "20%", "120%"],
                            }}
                          
                            transition={{
                                duration: 2,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "loop",
                                times: [0, 0.58, 0.64, 1],
                                repeatDelay: 5,
                            }}
                        >
                            <stop offset="0" stopColor="transparent" />
                            <stop offset="0.66" stopColor="orange" />
                            <stop offset="1" stopColor="transparent" />
                        </motion.linearGradient>
                    </defs>
                </svg>
                <svg width="2" height="56" viewBox="0 0 2 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-24 right-[107px]" style={{ opacity: 1 }}>
                    <line x1="1" y1="56" x2="1" stroke="var(--color-brand)" className="dark:stroke-neutral-50/20 stroke-neutral-500/20"    stroke-width="2"></line><line x1="1" y1="56" x2="1" stroke="url(#gradient-three)" stroke-width="1"></line>
                    <defs>
                        <linearGradient id="gradient-three" gradientUnits="userSpaceOnUse" x1="0%" x2="0%" y1="-69.52592%" y2="-59.52592%">
                            <stop stop-color="var(--color-line)" stop-opacity="1" offset="0"></stop>
                            <stop stop-color="#F17463" stop-opacity="0.5" offset="0.5"></stop>
                            <stop stop-color="#F17463" stop-opacity="0" offset="1"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="mt-12 flex flex-row gap-4.5">
                <div className="relative h-full text-xs" style={{ opacity: 1, transform: "none" }}>
                    <div className="absolute inset-x-0 -top-1.5 mx-auto size-3 rounded-full border-2 border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900"></div>
                    <div className="shadow-sm relative z-20 flex w-54 shrink-0 flex-col items-start rounded-lg bg-white dark:bg-neutral-900" style={{ transform: 'none' }}>
                        <div className="flex w-full items-center justify-between p-2 md:p-4">
                            <div className="flex items-center gap-2 font-medium">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.35264 7.97774L4.71136 6.65419L4.75082 6.53883L4.71136 6.47508H4.596L4.20137 6.4508L2.85353 6.41437L1.6848 6.3658L0.552492 6.30509L0.267139 6.24437L0 5.89223L0.027321 5.71617L0.267139 5.55528L0.61017 5.58563L1.36909 5.63724L2.50746 5.71617L3.33316 5.76474L4.55654 5.89223H4.75082L4.77814 5.81331L4.71136 5.76474L4.65975 5.71617L3.48191 4.91778L2.20693 4.07387L1.53908 3.58816L1.17784 3.34227L0.9957 3.11156L0.916772 2.60764L1.24462 2.2464L1.6848 2.27675L1.79712 2.30711L2.24336 2.65014L3.19656 3.38781L4.44118 4.30458L4.62332 4.45636L4.69618 4.40476L4.70529 4.36833L4.62332 4.23172L3.94637 3.00835L3.22388 1.76372L2.9021 1.24766L2.8171 0.938022C2.78674 0.810524 2.76549 0.704275 2.76549 0.573741L3.13888 0.0667847L3.34531 0L3.84316 0.0667847L4.05262 0.248925L4.36226 0.956236L4.86314 2.07033L5.64027 3.58513L5.86795 4.0344L5.98938 4.45029L6.03491 4.57779H6.11384V4.50493L6.17759 3.65191L6.29598 2.6046L6.41133 1.25677L6.4508 0.877308L6.63901 0.421958L7.0124 0.176069L7.30382 0.31571L7.54364 0.65874L7.51025 0.880344L7.36757 1.80622L7.08829 3.25727L6.90615 4.22869H7.0124L7.13382 4.10726L7.6256 3.45459L8.4513 2.42246L8.81558 2.01265L9.24058 1.56033L9.51379 1.3448H10.0299L10.4093 1.90944L10.2393 2.49228L9.70807 3.1662L9.2679 3.73691L8.63648 4.5869L8.24184 5.26689L8.27827 5.32153L8.37238 5.31242L9.79914 5.00885L10.5702 4.86921L11.49 4.71136L11.9059 4.90564L11.9514 5.10296L11.7875 5.5067L10.8039 5.74956L9.65039 5.98027L7.9322 6.38705L7.91095 6.40223L7.93524 6.43258L8.70934 6.50544L9.04022 6.52365H9.85075L11.3595 6.63597L11.7541 6.89704L11.9909 7.21579L11.9514 7.45864L11.3443 7.76828L10.5247 7.574L8.61219 7.11864L7.95649 6.95472H7.86542V7.00936L8.41184 7.54364L9.41361 8.44827L10.6673 9.61397L10.7311 9.90235L10.5702 10.13L10.4002 10.1057L9.29825 9.27701L8.87326 8.90362L7.91095 8.09309H7.84721V8.17809L8.06881 8.50291L9.24058 10.2636L9.30129 10.8039L9.21629 10.98L8.91273 11.0863L8.5788 11.0256L7.89274 10.0632L7.18543 8.97951L6.61472 8.0081L6.5449 8.04756L6.20794 11.6752L6.05009 11.8604L5.68581 12L5.38224 11.7693L5.22135 11.3959L5.38224 10.6582L5.57652 9.69593L5.73438 8.93094L5.87706 7.98077L5.96205 7.66506L5.95598 7.64382L5.88616 7.65292L5.16974 8.63648L4.07994 10.1088L3.21781 11.0316L3.01138 11.1136L2.65317 10.9284L2.68657 10.5975L2.88692 10.3031L4.07994 8.78523L4.79939 7.84417L5.26385 7.30079L5.26082 7.22186H5.23349L2.06426 9.28004L1.49962 9.3529L1.25677 9.12522L1.28712 8.75183L1.40248 8.63041L2.35568 7.9747L2.35264 7.97774Z" fill="#D97757"></path>
                                </svg>
                                Anthropic
                            </div>
                            <p className="font-mono text-gray-600">Claude 4</p>
                        </div>
                        <div className="bg-divide h-[1px] w-full">
                        </div>
                        <div className="m-4 rounded-sm border px-2 py-0.5 border-orange-500 bg-red-50 text-orange-500 dark:bg-red-50/10 dark:text-red-500">
                            UI Generator
                        </div>
                    </div>
                </div>
                <div className="relative h-full text-xs" style={{ opacity: 1, transform: 'none' }}>
                    <div className="absolute inset-x-0 -top-1.5 mx-auto size-3 rounded-full border-2 border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900"></div>
                    <div className="shadow-sm relative z-20 flex w-54 shrink-0 flex-col items-start rounded-lg bg-white dark:bg-neutral-900" style={{ transform: 'none' }}>
                        <div className="flex w-full items-center justify-between p-2 md:p-4">
                            <div className="flex items-center gap-2 font-medium">
                                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3 0.5C10.0661 0.5 9.10152 1.42936 8.22836 2.60993C7.02847 1.08215 6.025 0.5 4.82414 0.5C2.37586 0.5 0.5 3.68621 0.5 7.05862C0.5 9.16896 1.52096 10.5 3.23103 10.5C4.46184 10.5 5.34703 9.91974 6.92069 7.16897C6.92069 7.16897 7.57666 6.01055 8.02794 5.21258C8.18607 5.4679 8.35262 5.74302 8.52759 6.03793L9.26552 7.27931C10.703 9.68479 11.5039 10.5 12.9552 10.5C14.6211 10.5 15.5483 9.15077 15.5483 6.99655C15.5483 3.46552 13.6301 0.5 11.3 0.5ZM5.72069 6.42414C4.44483 8.42414 4.00345 8.87241 3.2931 8.87241C2.56207 8.87241 2.12759 8.23063 2.12759 7.08621C2.12759 4.63793 3.34828 2.13448 4.80345 2.13448C5.59146 2.13448 6.24999 2.58958 7.25867 4.03361C6.30088 5.50272 5.72069 6.42414 5.72069 6.42414ZM10.536 6.17236L9.65367 4.70088C9.4149 4.31256 9.18544 3.95512 8.96529 3.62858C9.76049 2.40122 10.4164 1.78966 11.1966 1.78966C12.8172 1.78966 14.1138 4.17587 14.1138 7.1069C14.1138 8.22414 13.7479 8.87242 12.9897 8.87242C12.2629 8.87241 11.9158 8.39247 10.536 6.17236Z" fill="#2762E7"></path>
                                </svg>Meta</div>
                            <p className="font-mono text-gray-600">
                                Llama 2
                            </p>
                        </div>
                        <div className="bg-divide h-[1px] w-full"></div>
                        <div className="m-4 rounded-sm border px-2 py-0.5 border-blue-500 bg-blue-50 text-blue-500 dark:bg-blue-50/10 dark:text-blue-500">Text Generator</div>
                    </div>
                </div>
                <div className="relative h-full text-xs" style={{ opacity: 1, transform: 'none' }}>
                    <div className="absolute inset-x-0 -top-1.5 mx-auto size-3 rounded-full border-2 border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900"></div>
                    <div className="shadow-sm relative z-20 flex w-54 shrink-0 flex-col items-start rounded-lg bg-white dark:bg-neutral-900" style={{ transform: 'none' }}>
                        <div className="flex w-full items-center justify-between p-2 md:p-4"><div className="flex items-center gap-2 font-medium">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_557_586" maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="13" style={{ maskType: "luminance" }}>
                                    <path d="M12.6081 0.5H0.5V12.5H12.6081V0.5Z" fill="white"></path>
                                </mask>
                                <g mask="url(#mask0_557_586)">
                                    <path d="M5.14399 4.86798V3.72797C5.14399 3.63196 5.18002 3.55994 5.26398 3.51197L7.55605 2.19199C7.86804 2.012 8.24006 1.92804 8.62401 1.92804C10.064 1.92804 10.976 3.04406 10.976 4.23202C10.976 4.316 10.976 4.41201 10.964 4.50802L8.58799 3.11599C8.44401 3.03201 8.29996 3.03201 8.15598 3.11599L5.14399 4.86798ZM10.496 9.30801V6.58396C10.496 6.41589 10.4239 6.29592 10.28 6.21194L7.26799 4.45995L8.25199 3.89591C8.33597 3.84797 8.408 3.84797 8.49198 3.89591L10.784 5.21591C11.4441 5.59996 11.888 6.41589 11.888 7.20787C11.888 8.11984 11.3481 8.95986 10.496 9.30791V9.30801ZM4.43599 6.90803L3.45199 6.33206C3.36804 6.28409 3.332 6.21207 3.332 6.11605V3.47608C3.332 2.19209 4.316 1.22002 5.64803 1.22002C6.15209 1.22002 6.61999 1.38809 7.01609 1.68805L4.6521 3.05612C4.50814 3.14008 4.43612 3.26007 4.43612 3.42811V6.90813L4.43599 6.90803ZM6.55402 8.13199L5.14399 7.34002V5.66008L6.55402 4.86811L7.96395 5.66008V7.34002L6.55402 8.13199ZM7.46001 11.7801C6.95597 11.7801 6.48807 11.612 6.09197 11.312L8.45594 9.94398C8.59992 9.86002 8.67195 9.74003 8.67195 9.57197V6.09197L9.668 6.66794C9.75196 6.71588 9.788 6.78791 9.788 6.88392V9.5239C9.788 10.8079 8.79194 11.78 7.46001 11.78V11.7801ZM4.61599 9.10406L2.32392 7.78406C1.66387 7.40002 1.21992 6.58408 1.21992 5.79211C1.21992 4.86811 1.77193 4.04012 2.62388 3.69209V6.42807C2.62388 6.59611 2.69593 6.71611 2.83989 6.80006L5.83995 8.54002L4.85595 9.10406C4.77199 9.15201 4.69994 9.15201 4.61599 9.10406ZM4.48406 11.0721C3.12805 11.0721 2.13202 10.052 2.13202 8.79204C2.13202 8.69603 2.14405 8.60002 2.15598 8.50401L4.51997 9.87205C4.66393 9.95604 4.80801 9.95604 4.95196 9.87205L7.96395 8.13212V9.2721C7.96395 9.36814 7.92794 9.44016 7.84396 9.48811L5.55192 10.8081C5.2399 10.9881 4.86788 11.0721 4.48394 11.0721H4.48406ZM7.46001 12.5C8.91204 12.5 10.124 11.468 10.4001 10.1C11.7441 9.75196 12.6081 8.49196 12.6081 7.20799C12.6081 6.36795 12.2481 5.55202 11.6001 4.96399C11.6601 4.71197 11.6961 4.45995 11.6961 4.20806C11.6961 2.49208 10.3041 1.20799 8.69603 1.20799C8.37211 1.20799 8.06009 1.25594 7.74807 1.364C7.20799 0.835977 6.46399 0.5 5.64803 0.5C4.19603 0.5 2.98409 1.53194 2.70799 2.89998C1.364 3.24802 0.5 4.50802 0.5 5.79198C0.5 6.63203 0.859961 7.44796 1.50798 8.03598C1.44798 8.288 1.41197 8.54002 1.41197 8.79192C1.41197 10.5079 2.804 11.792 4.41201 11.792C4.73596 11.792 5.04797 11.744 5.35999 11.636C5.89995 12.164 6.64395 12.5 7.46001 12.5Z" fill="currentColor"></path>
                                </g>
                            </svg>
                            OpenAI
                        </div>
                            <p className="font-mono text-gray-600">
                                GPT-5
                            </p>
                        </div>
                        <div className="bg-divide h-px w-full"></div>
                        <div className="m-4 rounded-sm border px-2 py-0.5 border-neutral-500 bg-neutral-50 text-neutral-500 dark:bg-neutral-50/10 dark:text-neutral-500">
                            Code Generator
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}