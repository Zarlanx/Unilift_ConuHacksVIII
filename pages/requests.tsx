import { useEffect, useState } from 'react';

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

function RequestsPage() {
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    fetch('http://localhost:6060/api/activeRequestsQuery')
      .then(response => response.json())
      .then(data => setRequests(data));
  }, []);

  return (
    <div>
      <h1>Requests</h1>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            <p>Origin: {request.origin}</p>
            <p>Destination: {request.destination}</p>
            <p>Size: {request.size}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequestsPage;