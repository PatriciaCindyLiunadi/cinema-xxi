import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`https://dummyjson.com/auth/login`, {
        username: username,
        password: password,
      });

      if (res.status === 200) {
        setSuccess(true);
        console.log(res);
        window.location.href = "/";
      }
    } catch (e) {
      setError(true);
      console.log(e);
    }
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500/10 via-teal-300/10 to-sky-200/10 min-h-screen flex items-center justify-center p-4 md:flex">
      <div className="bg-white block w-full max-w-screen-md overflow-hidden rounded-lg shadow-md space-y-8 md:flex md:flex-row text-slate-700">
        <div className="bg-emerald-400 flex flex-col items-center p-10 w-full md:w-2/5 md:h-4/5 text-white" style={{ minHeight: '90vh' }}>
          <div className="flex flex-col justify-center items-start text-left text-slate-700 w-full p-5 mx-auto h-full">
            <h2 className="text-3xl font-bold mb-4">Welcome To Cinema XXI</h2>
            <p className="text-base font-normal mb-5">
              "Welcome back to Cinema XXI! We're thrilled to see you back on our website. By logging in, you're entering a world of endless entertainment. Get ready to explore the latest movie schedules, enjoy exclusive promos, and easily book tickets.✨"
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-4 mx-auto">
          <div className="flex flex-col justify-center text-center space-y-4">
            <h1 className="text-slate-700 text-3xl font-semibold">XXI LOGIN</h1>
          </div>
          <div className="relative">
            <div className="w-full bg-white flex items-center mb-3 border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow-md">
              <input
                className="pl-2 py-1 w-60 focus:outline-none"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="w-full bg-white flex items-center mb-3 border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow-md">
              <input
                className="pl-2 py-1 w-60 focus:outline-none"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <button type="submit" className="bg-emerald-400 text-white px-4 py-2 rounded-md hover:bg-emerald-600">
                <Link href="/homepage">Login</Link>
              </button>
            </div>
            <div className="flex flex-row-reverse items-center mt-2 space-x-2 text-gray-600 text-sm">
              <p>Don't have an account?</p>
            </div>
            <Link href="/register" className="text-emerald-500 font-semibold flex flex-row-reverse items-center mt-2 space-x-2">
                Register here
              </Link>
          </div>
        </form>
      </div>

      {success && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="bg-white p-8 rounded-lg flex flex-col text-white">
            <h2 className="text-xl font-semibold mb-4 text-black text-center">
              Successfully Login
            </h2>
            <a href='/signInPage' className="text-green-700 text-center text-lg font-semibold hover:underline">Go to Cinema XXI</a>
            <button
              onClick={() => setSuccess(false)}
              className="bg-emerald-500 px-4 py-2 hover:bg-emerald-700 font-bold rounded-lg mt-4 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="bg-white p-8 rounded-lg flex flex-col text-white">
            <h2 className="text-xl font-semibold mb-4 text-black text-center">
              Login Failed
            </h2>
            <p className="text-red-500 py-4">Username or Password is incorrect!</p>
            <button
              onClick={() => setError(false)}
              className="bg-red-500 px-4 py-2 hover:bg-red-700 font-bold rounded-lg mt-4 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
