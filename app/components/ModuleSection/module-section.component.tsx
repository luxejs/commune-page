'use client'

import { GridLines, GradientLayer } from '../BackgroundEffects'
import Image from 'next/image'
import Link from 'next/link'
import { usePolkadot } from "@/app/wallet/context"
import SelectOrInput from "./selectOrInputStake"
import { useState } from 'react'

type ModuleSectionProps = {
    title: string
    subtitle: string,
    url: string,
    sectionName: string
    color: string
    gradientColor?: string
    gradientStyle?: string
    image: string,
    flipped: boolean,
    validatorKey: string

}

export const ModuleSection = ({
    title,
    subtitle,
    url,
    sectionName,
    color,
    gradientColor,
    gradientStyle,
    image,
    flipped,
    validatorKey
}: ModuleSectionProps) => {
    const { isConnected, addStake, removeStake } = usePolkadot()
    const parsedUrl = new URL(url)

    const [amount, setAmount] = useState('1');

    return (
        <section
            id={sectionName}
            className={`relative m-6 w-11/12 max-w-screen-xl overflow-hidden rounded-3xl bg-gray-800/40 ${color} px-6 py-16 text-center shadow-2xl md:p-12 lg:m-8 lg:p-24 border border-white border-opacity-[0.23]
      `}
        >
            <GridLines />
            <GradientLayer
                gradientColor={gradientColor}
                gradientStyle={gradientStyle}
            />
            <div className='absolute top-0 left-0 w-full backdrop-blur rounded-t-3xl py-4'>
                <div className="flex items-center space-x-2 px-5">
                    <button className="h-4 w-4 bg-[#fe5f57] rounded-full hover:bg-[#f43f35] transition-colors"></button>
                    <button className="h-4 w-4 bg-[#fdbc2e] rounded-full hover:bg-[#e7a718] transition-colors"></button>
                    <button className="h-4 w-4 bg-[#26c940] rounded-full hover:bg-[#1e9b30] transition-colors"></button>
                </div>
                <Link href={url} >

                    <div className="rounded-lg bg-gray-900 inline-block p-2 transition-transform transform hover:scale-110">

                        <h2 className='text-center text-sm font-mono font-extralight text-white'>

                            {url}
                        </h2>
                    </div>
                </Link>

            </div>
            {
                flipped ? (
                    <div className="absolute w-full h-full back bg-white">

                        <iframe
                            className="w-full h-full border-0"
                            src={url}
                            allowFullScreen
                            loading='lazy'
                        ></iframe>
                    </div>
                ) :
                    null
            }

            <div className='m-12 flex max-w-7xl flex-col items-center justify-center text-left'>
                <div className='mx-auto max-w-2xl transition-transform transform hover:scale-110'>

                    <Link href={url} >
                        <Image
                            src={image}
                            // src='/commune-gif.gif'
                            width={130}
                            height={130}
                            alt='commune logo'
                            // unoptimized
                            // className='ml-2 h-12'
                            loading='lazy'
                            className='mx-auto'
                        />
                        <h2 className='text-center text-base font-semibold leading-7 text-indigo-400'>
                            {parsedUrl.host}
                        </h2>
                        <p className='mt-2 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                            {title}
                        </p>
                    </Link>

                </div>
                {/* <div className='flex justify-center space-x-4 m-16'>
                    <button disabled={false}
                        // onClick={() => { console.log(validatorKey) }}//addStake({ validator: validatorKey, amount: String(10) }) }}
                        className='flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-transform transform hover:scale-105'>
                        Stake
                    </button>
                    <button disabled={false}
                        // onClick={() => { removeStake({ validator: validatorKey, amount: String(10) }) }}
                        className='flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 px-4 shadow-lg hover:from-red-600 hover:to-pink-600 transition-transform transform hover:scale-105'>
                        Unstake
                    </button>
                </div> */}

                <p className='mt-4 text-center text-md font-extralight tracking-tight text-white'>
                    {subtitle}
                </p>
                {
                    flipped ? (
                        <div className="absolute w-full h-full back bg-white">

                            <iframe
                                className="w-full h-full border-0"
                                src={url}
                                allowFullScreen
                            ></iframe>
                        </div>
                    ) :
                        null
                }


            </div>
            <div className='absolute bottom-0 left-0 w-full bg-gray-900/50 rounded-b-3xl py-4'>

                {isConnected ? (


                    <div className="flex justify-center space-x-4">
                        <button
                            disabled={!isConnected}
                            onClick={() => { addStake({ validator: validatorKey, amount: amount }) }}
                            className='flex w-1/4 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            Stake
                        </button>
                        <SelectOrInput isConnected={isConnected} amount={amount} setAmount={setAmount} />
                        {/* <div
                            className='rounded-xl bg-gray-900/50 border border-white border-opacity-[0.23] text-white py-2 px-4 shadow-lg transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'

                        >
                            {balance !== undefined && (
                                <p>{balance.toString()}</p>
                            )}
                        </div> */}
                        <button
                            disabled={!isConnected}
                            onClick={() => { removeStake({ validator: validatorKey, amount: amount }) }}
                            className='flex w-1/4 items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 px-4 shadow-lg hover:from-red-600 hover:to-pink-600 transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            Unstake
                        </button>
                    </div>

                ) : (
                    <h2 className='text-center text-sm font-mono font-extralight text-gray-700'>
                        {validatorKey}
                    </h2>
                )
                }
            </div>

        </section >
    )
}
