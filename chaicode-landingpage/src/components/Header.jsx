import React from 'react'

function Header() {
  return (
    <header className="fixed top left-0 right-0 z-50 transition-all duration-300 bg-transparent">
        <div className='container mx-auto px-4 py-4'>
            <div className='flex items-center justify-between'>
                <a className='flex items-center gap-2' href="/">
                    <div></div>
                    <div className='h-8 transform scale-[0.99601]'>
                    <img alt="ChaiCode" width="180" height="22" class="h-full w-auto" src="https://www.chaicode.com/chaicode-white.svg" />
                    </div>
                </a>
                <nav className='hidden md:flex items-center space-x-8'>
                    <a className=' flex items-center gap-1.5' href="">
                        <div className='flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors transform translate-[0.0026px] '>
                            <span className='flex items-center'>Cohorts</span>
                        </div>
                    </a>
                    <a className=' flex items-center gap-1.5' href="">
                        <div className='flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors transform translate-[0.0026px]'>
                            <span className='flex items-center'>Udemy</span>
                        </div>
                    </a>
                    <a className=' flex items-center gap-1.5' href="https://docs.chaicode.com">
                        <div className='flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors transform translate-[0.0026px]'>
                            <span className='flex items-center'>Docs</span>
                        </div>
                    </a>
                    <a className=' flex items-center gap-1.5' href="">
                        <div className='flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors transform translate-[0.0026px]'>
                            <span className='flex items-center'>Reviews</span>
                        </div>
                    </a>
                    
                </nav>
                <div>
                    <a href="https://courses.chaicode.com/learn/account/signin">
                        <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none shadow-xs  px-4 py-2 bg-orange-500 hover:bg-orange-600  text-white border-none transition-colors cursor-pointer '>Login</button>    
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header