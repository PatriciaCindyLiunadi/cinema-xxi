import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import {MdPermIdentity,  MdLockOutline, MdPhoneIphone} from "react-icons/md"
import { FaRegEnvelope } from "react-icons/fa";
import {BiHide, BiShow, BiSolidInfoCircle} from "react-icons/bi"

const fullname_valid = /^[A-Z][a-zA-Z\s]*$/;
const phoneNumber_Valid = /^\d+$/;
const email_valid = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //dapat menggunakan angka, huruf, _ dan . sebelum @
const pass_valid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,10}$/; //ada satu huruf dan angka yang required dengan min.6-10 huruf

export default function RegisterPage () {
    const userReference = useRef();

    const [fullname, setFullName] = useState('');
    const [validFullname, setValidFullname] = useState(false);
    const [fullnameFocus, setFullnameFocus] = useState(false);

    const[phonenum, setPhoneNum] = useState('');
    const [validphone, setValidPhone] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);

    const[email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
  
    const[pass, setPass] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [passFocus, setPassFocus] = useState(false);

    const [gender, setGender] = useState('');
    const [gendererror, setGenderError] = useState(false);

    // Hide n Unhine Pass
    const [showPass, setShowPass] = useState(false);

      // Error Message
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    // UseEffect
    
    useEffect(() => {
        userReference.current.focus();
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

    const handleSubmit = async(e) => {
        e.preventDefault();

        // if(!gender){
        //   setGenderError(true);
        // } else {
        //   setGenderError(false);
        //   console.log('gender:', gender);
        //   console.log('gendererror:', gendererror);
          console.log(fullname, phonenum, email, gender, pass);
          console.log("Registration Success");
          setSuccess(true);
          window.location.href = "/newlogin";
        // }
    }

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
                <div className="bg-white block w-full items-center max-w-screen-md overflow-hidden rounded-lg shadow-[0_3px_10px_rgb(0,0,0,1)] space-y-8 md:flex md:flex-row text-slate-700">
                    {/* Welcome */}
                    <div className="bg-emerald-400 flex flex-col items-center p-10 w-full md:w-2/5 md:h-4/5 text-white " style={{ minHeight: '90vh' }}>
                        <div className="flex flex-col justify-center items-start text-left text-slate-700 w-full p-5 mx-auto h-full">
                        <h2 className="text-3xl font-bold mb-4 ">Welcome To Cinema XXI</h2>
                        <p className="text-base font-normal mb-5 h-full">
                            Let's regist your account..
                            So you can freely buying your ticket and gets a bunch of promo✨<b/>
                            {/* Get ready to explore the latest movie schedules, enjoy exclusive promos, and easily book tickets. */}
                        </p>
                        </div>
                    </div>

                    {/* Regist */}
                    <form 
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center space-y-4 mx-auto"> 
                    {/* Title */}
                    <div className="flex flex-col justify-center text-center space-y-4">
                       <h1 className="text-slate-700 text-3xl font-semibold">
                           XXI Registration
                        </h1>
                    </div>
                    <div className="relative p-y">
                    
                        {/* Fullname */}

                        {/* Warning */}
                        <p
                        id="fullnamenote"
                        className={`${
                            fullnameFocus && fullname && !validFullname 
                              ? "instructions"
                              : "sr-only"
                            } flex items-center text-red-600 mb-2`
                          }
                        >
                          <BiSolidInfoCircle className="mr-2"/>  
                          Must start with capital letter
                        </p>


                        <div className="w-full bg-white flex items-center mb-[3%] border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow shadow-black">
                        <MdPermIdentity className="m-[1%] text-slate-700" />
                            <input
                            className="pl-2 py-1 w-60 focus:outline-none"
                            type="text"
                            placeholder="Fullname" 
                            autoComplete="off" 
                            ref={userReference}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            aria-invalid = {validFullname ? "false" : "true"}
                            aria-describedby="fullnamenote"
                            onFocus={() => setFullnameFocus(true)}
                            onBlur={() => setFullnameFocus(false)}
                            />
                        </div>

                        {/* Phone  Number */}

                        {/* Warning */}
                        <p
                        id="phonenote"
                        className={`${
                            phoneFocus && phonenum && !validphone 
                              ? "instructions"
                              : "sr-only"
                            } flex items-center text-red-600 mb-2`
                          }
                        >
                          <BiSolidInfoCircle className="mr-2"/>  
                          The PhoneNmber must be valid.
                        </p>

                        <div className="w-full bg-white flex items-center mb-[3%] border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow shadow-black">
                        <MdPhoneIphone className="m-[1%] text-slate-700"/>
                        <input
                        className="pl-2 py-1 w-60 focus:outline-none"
                        type="tel"
                        placeholder="Phone Number"
                        onChange={(e) => setPhoneNum(e.target.value)}
                        required
                        aria-invalid = {validphone ? "false" : "true"} 
                        aria-describedby="phonenote"
                        onFocus={() => setPhoneFocus(true)}
                        onBlur={() => setPhoneFocus(false)}
                        />
                        </div>

                        {/* Email */}

                        {/* Warning */}
                        <p
                        id="emailnote"
                        className={`${
                            emailFocus && email && !validEmail
                              ? "instructions"
                              : "sr-only"
                            } flex items-center text-red-600 mb-2`
                          }
                        >
                          <BiSolidInfoCircle className="mr-2"/>  
                          Letters, numbers, underscore and dot are allowed
                        </p>


                        <div className="w-full bg-white flex items-center mb-[3%] border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow shadow-black">
                        <FaRegEnvelope className="m-[1%] text-slate-700"/>
                        <input
                        className="pl-2 py-1 w-60 focus:outline-none"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby = "emailnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        />
                        </div>

                        {/* Gender */}

                        {/* Warning */}
                        {/* {gendererror && (
                          <p className="text-red-600 mb-2">
                            <BiSolidInfoCircle className="mr-2"/>  
                            Please select your gender
                          </p>
                        )} */}
                        {/* <p
                        id="gendernote"
                        className={`${
                            !gender
                              ? "text-red-600 mb-2"
                              : "sr-only"
                            } flex items-center `
                          }
                        >
                          <BiSolidInfoCircle className="mr-2"/>  
                          Please select your gender
                        </p> */}


                        <div className="w-40 bg-white flex items-center mb-[3%] border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow shadow-black">
                        <select
                        className="py-1 w-full focus:outline-none"
                        onChange={(e) => setGender(e.target.value)}       
                        value={gender}
                        required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>

                        </select>
                        </div>

                        {/* Password */}
                        
                        {/* Warning */}
                        <p
                        id="email-note"
                        className={`${
                            passFocus && pass && !validPass 
                            ? "instructions" 
                            : "sr-only"
                            } flex items-center text-red-600 mt-2`
                        }
                        >
                        <BiSolidInfoCircle className="mr-2"/>
                        6 to 10 characters <br />
                        Must have atleast 1 characters, 1 numbers
                        </p>

                        <div className="w-full bg-white flex items-center mb-[3%] border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow shadow-black">
                        <MdLockOutline className="m-[1%] text-slate-700"/>
                        <input
                        className="pl-2 py-1 w-60 focus:outline-none"
                        type={showPass ? "text" : "password"}
                        placeholder="Password"
                        onChange={(e) => setPass(e.target.value)}
                        required
                        aria-invalid={validPass ? "false" : "true"}
                        aria-describedby ="passnote"
                        onFocus={() => setPassFocus(true)}
                        onBlur={() => setPassFocus(false)}
                        />

                        {/* Show n Unhide pass */}
                        {showPass ? (
                            <BiHide
                            onClick={() => setShowPass(false)}
                            className="cursor-pointer"
                            />
                        ): (
                            <BiShow
                            onClick={() => setShowPass(true)}
                            className="cursor-pointer"
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

                    {/* Pop up succes Regist */}
                    {/* { success && (
                    <div className="fixed inset-0 h-screen mx-auto flex items-center justify-center z-50 bg-black bg-opacity-70" style={{ minHeight: '100vh' }}> 
                        <div className="bg-white p-8 rounded-lg flex flex-col text-white relative ">
                            <h2 className="text-xl font-semibold mb-4 text-black text-center">
                            Successfully Register
                            </h2>
                            <a href='/' className="text-emerald-700 text-center text-lg font-semibold hover:underline ">Sign in</a>
                            <button
                            onClick={() => setSuccess(false)}
                            className="bg-emerald-500 px-4 py-2 hover:bg-emerald-700 font-bold rounded-lg mt-4 text-white"
                            >
                            Close
                            </button>
                        </div>
                    </div>
                    )} */}
                </div>
            </div>
        </div>
    )
}