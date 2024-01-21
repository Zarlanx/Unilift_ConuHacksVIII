import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

function NavBar() {
  return (
    <div className='flex justify-between p-3 px-10 shadow-2xl'>
        <div className='flex gap-20 items-center'>
            <Image src='/logo.png'
            alt='logo' 
            width={150}
            height={10}
            />
            <div className='flex gap-5'>
            <Link href='/' legacyBehavior className='hover:bg-purple-400 p-3 rounded-lg cursor-pointer transition-all'>
                    <a className='hover:bg-purple-400 p-3 rounded-lg cursor-pointer transition-all'>
                  Home
                  </a>
                </Link>
                <h3 className='hover:bg-purple-400 p-3 rounded-lg cursor-pointer transition-all'>Past Orders</h3>
                <Link href='/requests' legacyBehavior className='hover:bg-purple-400 p-3 rounded-lg cursor-pointer transition-all'>
                    <a className='hover:bg-purple-400 p-3 rounded-lg cursor-pointer transition-all'>
                  Requests
                  </a>
                </Link>
            </div>
        </div>
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}



export default NavBar