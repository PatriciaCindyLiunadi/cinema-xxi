import React from "react";
import Head from "next/head";

const fullname_valid = /^[A-Z][a-zA-Z\s]*$/;
const username_valid = /^[a-zA-Z][a-zA-Z0-9_]{4,14}$/; //bebas min 5-15 huruf bole spasi
const email_valid = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //dapat menggunakan angka, huruf, _ dan . sebelum @
const pass_valid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,10}$/; //ada satu huruf dan angka yang required dengan min.6-10 huruf

export default function RegisterPage () {
    return (
        <div>
            <div>
                <Head>
                  <title>Register Page</title>
                </Head>
            </div>
            {/* Background */}
            <div className="bg-gradient-to-r from-cyan-500/10 via-teal-300/10 to-sky-200/10 block h-screen items-center justify-center p-4 md:flex">
            
                <div className="bg-white flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-[0_3px_10px_rgb(0,0,0,1)] space-y-8 w-full md:flex-row text-slate-700">
                    <div className="bg-blue flex fex-col justify-center p-14">
                    
                    </div>
                    <form className="flex flex-col justify-center items-center p-14 pl-36 space-y-4"> 

                    </form>
                </div>
            </div>
        </div>
    )
}