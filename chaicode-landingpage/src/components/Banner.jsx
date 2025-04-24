import React from 'react'

function Banner() {
    return (
        <div className='relative min-h-screen bg-black text-white pt-20'>
            <div className='container mx-auto px-4 py-20 relative z-10'>
                <div className='max-w-4xl mx-auto text-center'>
                    <div className='mb-6 transform-none opacity-[1]'>
                        <span className='inline-flex items-center justify-center rounded-md border text-xs font-medium w-fit whitespace-nowrap shrink-0  gap-1 px-4 py-1.5 border-gray-700 bg-black/50 backdrop-blur-sm'>
                            <span className='mr-2 text-sm text-white'>Trusted by 1.5M Code Learners</span>
                            <span className='relative flex h-2 w-2'>
                                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75'></span>
                                <span className='relative inline-flex rounded-full h-2 w-2 bg-red-500'></span>
                            </span>
                        </span>
                    </div>
                   
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight opacity-[1] transform-none">
                        <span className="inline-block relative mr-3">Consistency 
                            <span className="w-full absolute -bottom-2 left-0 h-1 bg-orange-500 "></span> 
                        </span> 
                         and 
                         <span className="inline-block relative ml-3">Community
                            <span className="w-full absolute -bottom-2 left-0 h-1 bg-amber-500" ></span>
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Banner