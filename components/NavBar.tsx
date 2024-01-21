import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

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
                <h3 className='hover:bg-purple-400 p-3 rounded-lg cursor-pointer transition-all'>Home</h3>
                <h3 className='hover:bg-purple-400 p-3 rounded-lg cursor-pointer transition-all'>Past Orders</h3>
                <h3 className='hover:bg-purple-400 p-3 rounded-lg cursor-pointer transition-all'>Requests</h3>
               
            </div>
        </div>
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}



export default NavBar