'use client'
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Modal from 'react-modal'
import { useState, useEffect } from 'react'
import requests from '@/pages/requests'

interface Request {
    id: string;
    event: string | null;
    origin: string;
    destination: string;
    active: boolean;
    size: number;
    name: string | null;
    createdAt: string | null;
  }

function NavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [requests, setRequests] = useState<Request[]>([]);


    useEffect(() => {
        fetch('http://localhost:6060/api/activeRequestsQuery')
          .then(response => response.json())
          .then(data => setRequests(data));
      }, []);

      function handleAccept(id: string) {
        window.location.reload();
      }

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
                <button onClick={() => setIsModalOpen(true)}>Show Active Requests</button>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} style={{
    content: {
      color: 'white',
      background: 'black',
      border: 'none'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
  }}>
        <h2>Active Requests</h2>
        <ul>
  {requests.map((request) => (
    <li key={request.id} style={{ marginBottom: '10px' }}>
      <p>Origin: {request.origin}</p>
      <p>Destination: {request.destination}</p>
      <p>Size: {request.size}</p>
      <button 
  onClick={() => handleAccept(request.id)} 
  style={{ backgroundColor: 'green', color: 'white' }}
>
  Accept
</button>
    </li>
  ))}
</ul>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
      
    </div>
    
    </div>
    <nav><UserButton/></nav>
    </div>
  );
}



export default NavBar