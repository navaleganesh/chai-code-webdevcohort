import React from 'react'

function Banner() {
    return (
        <div className='relative min-h-screen bg-black text-white pt-20'>
            <div className='container mx-auto px-4 py-20 relative z-10'>
                <div className='max-w-4xl mx-auto text-center'>
                    <div className='mb-6 transform-none opacity-[1]'>
                        <span className='inline-flex items-center justify-center rounded-md border text-xs font-medium w-fit whitespace-nowrap shrink-0  gap-1 px-4 py-2 border-gray-700 bg-black/50 backdrop-blur-sm'>
                            <span className='mr-2 text-sm text-white'>Trusted by <span className='text-amber-300 text-1xl font-bold'>1.5M</span> Code Learners</span>
                            
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
                    <h2 className='text-3xl md:text-4xl font-bold mb-8 leading-tight opacity-[1] transform-none'>
                        <span className='bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 text-transparent bg-clip-text'>An unmatched Learning Experience for coding courses.</span>
                    </h2>
                    <p className='text-lg text-gray-300 mb-8 max-w-3xl mx-auto' >
                    Content is everywhere, but we provide a learning experience that is unmatched — bounties, peer learning, code reviews, virtual hostel, alumni network, doubt sessions, and group projects.
                    </p>
                    <div className='mb-6  transform-none opacity-[1]'>
                        <span className='inline-flex items-center justify-center rounded-md border text-xs font-medium w-fit whitespace-nowrap shrink-0  gap-1 px-16 py-5 border-orange-500 bg-black/50 backdrop-blur-sm '>
                            <span className='mr-5 text-2xl text-white'>
                                <a href="https://courses.chaicode.com/learn/account/signin" target='_blank'>Check All Live Cohorts</a>
                            </span>
                            <span className='relative flex h-3 w-3 items-center justify-center'>
                                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75'></span>
                                <span className='relative inline-flex rounded-full h-3 w-3 bg-red-500'></span>
                            </span>
                        </span>
                    </div>
                    
                </div>

                <div className='mt-16 max-w-3xl mx-auto relative'>
                    <div className='aspect-video bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden shadow-xl'>
                        <div className='absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 pointer-events-none'>
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/VNb_LawBBWU?si=YbQHunqERJrkYLmx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner