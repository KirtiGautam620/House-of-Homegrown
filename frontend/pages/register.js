import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Link from 'next/link';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password);
  };

  return (
    <div className="flex justify-center items-center py-20 bg-gray-50 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input 
              type="text" 
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name} onChange={(e) => setName(e.target.value)} required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
              type="email" 
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email} onChange={(e) => setEmail(e.target.value)} required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password} onChange={(e) => setPassword(e.target.value)} required 
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
              Register
            </button>
          </div>
          <div className="mt-4 text-center">
            <Link href="/login" className="inline-block align-baseline font-semibold text-sm text-green-600 hover:text-green-800">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
