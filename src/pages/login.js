
import Link from 'next/link';
import { useState, useRef, useEffect, useContext, useReference } from 'react';
import axios from './api/axios';
import AuthContext from '../context/AuthProvider';

const LOGIN_URL = '/auth';
const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ username, password, roles, accessToken });
            setUsername('');
            setPassword('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    } 
  return (
    <div>
      <div> 
        </div>
        {/* Background bg-gradient-to-r from-cyan-500/10 via-teal-300/10 to-sky-200/10, bg-gradient-to-r from-cyan-300 to-blue-300*/}
           <div className="bg-white block h-screen items-center justify-center p-4 md:flex">
        {/* Container */}
        <div className="bg-white flex flex-col items-center max-w-screen-md overflow-hidden rounded-lg shadow-[0_3px_10px_rgb(0,0,0,1)] space-y-8 w-full md:flex-row text-slate-700">
            {/* Welcome gradient-to-t from-emerald-400 to-stone-100  */}
            <div className="bg-emerald-400 flex flex-col items-center p-10 w-full md:w-2/5 md:h-4/5 text-white">
                <div className="flex flex-col justify-center items-start text-left text-slate-700 w-full p-5 mx-auto h-full">
                <h2 className="text-3xl font-bold mb-4 ">Welcome To Cinema XXI</h2>
                <p className="text-base font-normal mb-5 h-full">
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec
                    ultricies nisi. Suspendisse pulvinar viverra nibh vel ultricies.
                    Mauris tincidunt mollis diam, at mollis enim aliquet eget. Fusce
                    eros neque, pharetra eget tincidunt in, tincidunt nec tellus. */}
                    "Welcome back to Cinema XXI!
We're thrilled to see you back on our website. By logging in, you're entering a world of endless entertainment. Get ready to explore the latest movie schedules, enjoy exclusive promos, and easily book tickets.✨
                </p>
                </div>
            </div>
            <form 
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center space-y-4 mx-auto"> 
            {/* Title */}
            <div className="flex flex-col justify-center text-center space-y-4">
               <h1 className="text-slate-700 text-3xl font-semibold">
                   XXI LOGIN
                </h1>
            </div>
            <div className="relative p-y">
                <div className="w-full bg-white flex items-center mb-[3%] border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow shadow-black">
                <input
                className="pl-2 py-1 w-60 focus:outline-none"
                type="text"
                placeholder="Username"
                value={username}
                ref={userRef}
                onChange={(e) => setUsername(e.target.value)}
                />
                </div>
                <div className="w-full bg-white flex items-center mb-[3%] border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow shadow-black">
                <input
                className="pl-2 py-1 w-60 focus:outline-none"
                type='password'
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            <Link href="/home">Login</Link>
          </button>
        </div>
        <div className="flex flex-col">
          <button
            type="button"
            className="bg-gray-400 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-500"
          >
            <Link href="/register">Register</Link>
          </button>
        </div>
            </div>
            </form>
            {success ? (
  <section className="text-center py-16">
    <h1 className="text-4xl font-bold">You are logged in!</h1>
    <br />
    <p className="mt-4">
      <a href="#" className="text-blue-500 hover:underline">Go to Home</a>
    </p>
  </section>
) : null}
        </div>
    </div>
    
</div>
  );
};

export default Login;