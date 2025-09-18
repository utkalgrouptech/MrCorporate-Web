// pages/dashboard.tsx
import React, { useEffect, useState } from 'react';

interface UserData {
    id:string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

export default function Dashboard() {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    // Fetch data from the Express server
    fetch('http://localhost:5000/api/appointments')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="main-container pt-4">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Username</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Number</th>
              <th scope="col" className="px-6 py-3">Services</th>
              <th scope="col" className="px-6 py-3">Additional Text</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{user.companyName}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">{user.service}</td>
                <td className="px-6 py-4">{user.date}</td>
                <td className="px-6 py-4">{user.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
