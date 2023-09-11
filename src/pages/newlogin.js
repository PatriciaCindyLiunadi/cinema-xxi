import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`https://dummyjson.com/auth/login`, {
        username: username,
        password: password,
      });

      if (res.status === 200) {
        // window.modal_success.showModal();
        console.log(res);
      }
    } catch (e) {
      // window.modal_failed.showModal();
      console.log(e);
    }
    setSuccess(true);
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500/10 via-teal-300/10 to-sky-200/10 min-h-screen flex items-center justify-center p-4 md:flex">
      <div className="bg-white block w-full max-w-screen-md overflow-hidden rounded-lg shadow-md space-y-8 p-4 md:flex md:flex-row text-slate-700">
        <div className="bg-emerald-400 flex flex-col items-center p-10 w-full md:w-2/5 md:h-4/5 text-white">
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
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                <Link href="/homepage">Login</Link>
              </button>
            </div>
            <div className="flex flex-col">
              <button type="button" className="bg-gray-400 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-500">
                <Link href="/register">Register</Link>
              </button>
            </div>
          </div>
        </form>
      </div>

      {success && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
              <div className="bg-white p-8 rounded-lg flex flex-col text-white ">
                <h2 className="text-xl font-semibold mb-4 text-black text-center">
                  Successfully Sign Up
                </h2>
                {/* <ImCheckmark className="text-6xl text-sky-700 animate-pulse mx-auto mb-4" /> */}
                <a href='/signInPage' className="text-sky-700 text-center text-lg font-semibold hover:underline ">Sign in</a>
                <button
                  onClick={() => setSuccess(false)}
                  className="bg-blue-500 px-4 py-2 hover:bg-blue-700 font-bold rounded-lg mt-4 text-white"
                >
                  Close
                </button>
              </div>
            </div>
          )}

      {/* <dialog id='modal_success' className='modal fixed inset-x-0 top-1/2 transform -translate-y-1/2'>
        <form method='dialog' className='modal-box'>
          <h3 className='font-bold text-lg'>Login Berhasil</h3>
          <p className='py-4'>Hallo anda berhasil login!</p>
          <div className='modal-action'>
            <Link href={'/homepage'}>
              <button className='btn'>OK</button>
            </Link>
          </div>
        </form>
      </dialog>
      <dialog id='modal_failed' className='modal fixed inset-x-0 top-1/2 transform -translate-y-1/2'>
        <form method='dialog' className='modal-box'>
          <h3 className='font-bold text-lg'>Login Gagal</h3>
          <p className='py-4'>Username atau Password salah!</p>
          <div className='modal-action'>
            <button className='btn'>OK</button>
          </div>
        </form>
      </dialog> */}
    </div>
  );
};

export default Login;
