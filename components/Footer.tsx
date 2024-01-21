import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function Footer() {
    return (
      <div className='flex justify-between p-3 px-10 bg-gray-700 '>
          <div className='flex gap-5'>
              <h3 className='hover:bg-purple-400 p-3 rounded-lg cursor-pointer transition-all'>Career</h3>
              <h3 className='hover:bg-purple-400 p-3 rounded-lg cursor-pointer transition-all'>Help</h3>
              <h3 className='hover:bg-purple-400 p-3 rounded-lg cursor-pointer transition-all'>Privacy Policy</h3>
              <h3 className='hover:bg-purple-400 p-3 rounded-lg cursor-pointer transition-all'>Terms of Service</h3>
          </div>
      </div>
    )
  }
  
  export default Footer