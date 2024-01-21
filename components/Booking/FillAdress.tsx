'use client'
import React, { useEffect, useState } from 'react'

function FillAdress() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [message, setMessage] = useState('');
    const [eventTitles, setEventTitles] = useState([]);
    const [size, setSize] = useState(0);


    useEffect(() => {
        fetch('http://localhost:6060/event/titles')
          .then(response => response.json())
          .then(data => {
            console.log(data); // print JSON to console
            setEventTitles(data);
          });
      }, []);

    const handleBookClick = async () => {
        const request = {
            origin,
            destination,
            active: true,
            name: 'Test',
            size: size,
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
          window.location.reload();
        };

  return (
    
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
<option value="McGill University, Montreal">McGill University, Montreal</option>
<option value="Concordia University, Montreal">Concordia University, Montreal</option>
<option value="University of Waterloo, Waterloo">University of Waterloo, Waterloo</option>
<option value="University of Toronto, Toronto">University of Toronto, Toronto</option>
<option value="University of British Columbia, Vancouver">University of British Columbia, Vancouver</option>
<option value="University of Alberta, Edmonton">University of Alberta, Edmonton</option>
<option value="University of Calgary, Calgary">University of Calgary, Calgary</option>
<option value="University of Ottawa, Ottawa">University of Ottawa, Ottawa</option>
<option value="University of Manitoba, Winnipeg">University of Manitoba, Winnipeg</option>
<option value="University of Saskatchewan, Saskatoon">University of Saskatchewan, Saskatoon</option>
<option value="University of Victoria, Victoria">University of Victoria, Victoria</option>
<option value="York University, Toronto">York University, Toronto</option>
<option value="University of Montreal, Montreal">University of Montreal, Montreal</option>
<option value="University of Quebec, Montreal">University of Quebec, Montreal</option>
<option value="University of Quebec, Quebec City">University of Quebec, Quebec City</option>
<option value="University of Western Ontario, London">University of Western Ontario, London</option>
<option value="University of Sherbrooke, Sherbrooke">University of Sherbrooke, Sherbrooke</option>
  </select>
</div>
<div className='mt-5'>
  <label>Destination:</label>
  <div>
        {eventTitles && eventTitles.map((title, index) => (
          <div key={index}>
            <input 
              type='radio' 
              name='destination' 
              value={title} 
              checked={destination === title}
              onChange={e => setDestination(e.target.value)}
            />
            <label>{title}</label>
          </div>
        ))}
      </div>
      <div>
  <label>Group Size:</label>
  <div>
    <input 
      type="number" 
      className='bg-gray-700 rounded-lg p-2 w-large outline-none' 
      value={size} 
      onChange={e => setSize(Number(e.target.value))}
    />
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
    <button onClick={handleBookClick} className='bg-purple-400 p-3 rounded-lg mt-5 w-full'>
        Book
    </button>
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