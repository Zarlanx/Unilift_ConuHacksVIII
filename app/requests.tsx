import React, { useEffect, useState } from 'react';

function Requests() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetch('http://localhost:6060/api/requests')
            .then(response => response.json())
            .then(data => {
                console.log(data); // log the data to the console
                setRequests(data);
            });
    }, []);

    return (
        <div>
            <h1>Requests</h1>
            <ul>
                {requests.map((requestRepository: any) => (
                    <li key={requestRepository.id}>{requestRepository.name}</li>
                ))}
            </ul>
        </div>
    );
}


export default Requests