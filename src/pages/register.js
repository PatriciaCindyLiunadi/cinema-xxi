import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { MdPermIdentity, MdLockOutline, MdPhoneIphone } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import {BiHide, BiShow} from "react-icons/bi"

const fullname_valid = /^[A-Z][a-zA-Z\s]*$/;
const phoneNumber_Valid = /^\d+$/;
const email_valid = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //dapat menggunakan angka, huruf, _ dan . sebelum @
const pass_valid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,10}$/; //ada satu huruf dan angka yang required dengan min.6-10 huruf

export default function RegisterPage () {
    const useReference = useRef();
    const errorReference = useRef();

    const [fullname, setFullName] = useState('');
    const [validFullname, setValidFullname] = useState(false);
    const [fullnameFocus, setFullnameFocus] = useState(false);

    const[phonenum, setPhoneNum] = useState('');
    const [validphone, setValidPhone] = useState(false);
    const [phonefocus, setPhoneFocus] = useState(false);

    const[email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
  
    const[pass, setPass] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [passFocus, setPassFocus] = useState(false);

    const [gender, setGender] = useState('');

    // Hide n Unhine Pass
    const [showpass, setShowPass] = useState(false);

      // Error Message
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    // UseEffect
    
    useEffect(() => {
        useReference.current.focus();
    },[]);

    useEffect(() => {
        const result = fullname_valid.test(fullname);
        console.log(result);
        console.log(fullname);
        setValidFullname(result);
    },[fullname]);

    useEffect(() => {
        const result = phoneNumber_Valid.test(phonenum);
        console.log(result);
        console.log(phonenum);
        setValidPhone(result);
    },[phonenum]);

    useEffect(() => {
        const result = email_valid.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
     }, [email]);

    useEffect(() => {
        const result = pass_valid.test(pass);
        console.log(result);
        console.log(pass);
        setValidPass(result);
    }, [pass]);

    useEffect(() => {
        setErrMsg("");
    }, [fullname, phonenum, email, pass, gender])

    return (
        <div>
            <div>
                <Head>
                  <title>Register Page</title>
                </Head>
            </div>
            {/* Background bg-gradient-to-r from-cyan-500/10 via-teal-300/10 to-sky-200/10, bg-gradient-to-r from-cyan-300 to-blue-300*/}
            <div className="bg-white block h-screen items-center justify-center p-4 md:flex">
                {/* Container */}
                <div className="bg-white flex flex-col items-center max-w-screen-md overflow-hidden rounded-lg shadow-[0_3px_10px_rgb(0,0,0,1)] space-y-8 w-full md:flex-row text-slate-700">
                    {/* Welcome gradient-to-t from-emerald-400 to-stone-100  */}
                    <div className="bg-emerald-400 flex flex-col items-center p-10 w-full md:w-2/5 text-white">
                        <div className="flex flex-col justify-center items-start text-left text-slate-700 w-full p-5">
                        <h2 className="text-3xl font-bold mb-4 ">Welcome To Cinema XXI</h2>
                        <p className="text-base font-normal mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec
                            ultricies nisi. Suspendisse pulvinar viverra nibh vel ultricies.
                            Mauris tincidunt mollis diam, at mollis enim aliquet eget. Fusce
                            eros neque, pharetra eget tincidunt in, tincidunt nec tellus.
                        </p>
                        </div>
                    </div>

                    {/* Regist */}
                    <form className="flex flex-col justify-center items-center space-y-4 mx-auto"> 
                    {/* Title */}
                    <div className="flex flex-col justify-center text-center space-y-4">
                       <h1 className="text-slate-700 text-3xl font-semibold">
                           XXI Registration
                        </h1>
                    </div>
                    <div className="relative p-y">
                    
                        {/* Fullname */}
                        <div className="w-full bg-white flex items-center mb-[3%] border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow shadow-black">
                        <MdPermIdentity className="m-[1%] text-slate-700" />
                            <input
                            className="pl-2 py-1 w-60 focus:outline-none"
                            type="text"
                            placeholder="Fullname" 
                            autoComplete="off" 
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            />
                        </div>

                        {/* Phone  Number */}
                        <div className="w-full bg-white flex items-center mb-[3%] border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow shadow-black">
                        <MdPhoneIphone className="m-[1%] text-slate-700"/>
                        <input
                        className="pl-2 py-1 w-60 focus:outline-none"
                        type="tel"
                        placeholder="Phone Number"
                        onChange={(e) => setPhoneNum(e.target.value)}
                        required
                        />
                        </div>

                        {/* Email */}
                        <div className="w-full bg-white flex items-center mb-[3%] border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow shadow-black">
                        <FaRegEnvelope className="m-[1%] text-slate-700"/>
                        <input
                        className="pl-2 py-1 w-60 focus:outline-none"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                        </div>

                        {/* Gender */}
                        <div className="w-40 bg-white flex items-center mb-[3%] border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow shadow-black">
                        <select
                        className="py-1 w-full focus:outline-none"
                        onChange={(e) => setGender(e.target.value)}                   
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>

                        </select>
                        </div>

                        {/* Password */}
                        <div className="w-full bg-white flex items-center mb-[3%] border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow shadow-black">
                        <MdLockOutline className="m-[1%] text-slate-700"/>
                        <input
                        className="pl-2 py-1 w-60 focus:outline-none"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPass(e.target.value)}
                        required
                        />

                        {/* Show n Unhide pass */}
                        {showpass ? (
                            <BiHide
                            onClick={() => setShowPass(false)}
                            />
                        ): (
                            <BiShow
                            onClick={() => setShowPass(true)}
                            />
                        )}
                        </div>

                        {/* Button regist */}
                        <div>
                            <button 
                            type="submit"
                            className="bg-emerald-400 text-white px-4 py-2 rounded-lg hover:bg-emerald-500 transition-colors duration-200"
                            >
                            Register Account
                            </button>
                        </div>

                        {/* TOC */}
                        <div className="flex flex-col items-center mt-2 leading-snug text-xs ">
                        <p className="text-justify mb-2 w-60">
                        By clicking Register Account, I confirm I have agreed to Terms & Condition,<b/>
                        and Privacy Policy of Cinema XXI.
                        </p>
                        </div>

                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}