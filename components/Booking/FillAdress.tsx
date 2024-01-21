'use client'
import React, { useState } from 'react'

function FillAdress() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [message, setMessage] = useState('');

    const handleBookClick = async () => {
        const request = {
            origin,
            destination,
        };

        try {
            const response = await Promise.race([
              fetch('http://localhost:6060/api/addRequest', {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
              }),
              new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Timeout')), 5000)
              )
            ]) as Response;
          
            if (response.ok) {
              setMessage('Booking successful!');
            } else {
              setMessage('Error booking. Please try again.');
            }
          } catch (error) {
            console.error('Failed to fetch:', error);
            setMessage('Failed to make the booking. Please check the console for more details.');
          }
        };

  return (
    <div>
        <div className='p-5'>
            <h2 className='text-[20px] font-bold'>Book a ride</h2>
        <div className='border-[1px] p-3 rounded-lg'>
            <div>
    
            <div className='mt-2'>        
  <label>Origin:</label>
  <select 
    className='bg-gray-700 rounded-lg p-2 w-full outline-none text-white'
    value={origin}
    onChange={e => setOrigin(e.target.value)}
  >
    <option value="">Select an origin</option>
    <option value="Location 1">McGill University, Montreal</option>
    <option value="Location 2">Concordia University, Montreal</option>
    <option value="Location 3">University of Waterloo, Waterloo</option>
    <option value="Location 4">University of Toronto, Toronto</option>
    <option value="Location 5">University of British Columbia, Vancouver</option>
    <option value="Location 6">University of Alberta, Edmonton</option>
    <option value="Location 7">University of Calgary, Calgary</option>
    <option value="Location 8">University of Ottawa, Ottawa</option>
    <option value="Location 9">University of Manitoba, Winnipeg</option>
    <option value="Location 10">University of Saskatchewan, Saskatoon</option>
    <option value="Location 11">University of Victoria, Victoria</option>
    <option value="Location 12">York University, Toronto</option>
    <option value="Location 13">University of Montreal, Montreal</option>
    <option value="Location 14">University of Quebec, Montreal</option>
    <option value="Location 15">University of Quebec, Quebec City</option>
    <option value="Location 16">University of Western Ontario, London</option>
    <option value="Location 17">University of Sherbrooke, Sherbrooke</option>
  </select>
</div>
<div className='mt-5'>
  <label>Destination:</label>
  <div className='flex flex-col'>
    <label>
      <input 
        type='radio' 
        name='destination' 
        value='Event 1' 
        checked={destination === 'Event 1'}
        onChange={e => setDestination(e.target.value)}
      />
      Event 1
    </label>
    <label>
      <input 
        type='radio' 
        name='destination' 
        value='Event 2' 
        checked={destination === 'Event 2'}
        onChange={e => setDestination(e.target.value)}
      />
      Event 2
    </label>
    <label>
      <input 
        type='radio' 
        name='destination' 
        value='Event 3' 
        checked={destination === 'Event 3'}
        onChange={e => setDestination(e.target.value)}
      />
      Event 3
    </label>
  </div>
</div>
<div className='mt-5'>
<strong>Disclaimer</strong>
: Unilift is not responsible for any harm, injury, or accident that may occur as a result of using our services. Users are also admitting to having reached the age of 18 and are responsible for their own actions.

</div>
<div className='mt-5 font-bold'>
  <label>
    <input 
      type='radio' 
      name='understood' 
      value='understood' 
    />
    I have read and understood UniLift's rules of conduct.
  </label>
</div>

<div>
    <button onClick={handleBookClick} className='bg-purple-400 p-3 rounded-lg mt-5 w-full'>Book</button>
</div>
<div>
    {message}
</div>
</div>
</div>
</div></div>
  )
}

export default FillAdress;