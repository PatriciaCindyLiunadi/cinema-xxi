import React from "react"
import Link from "next/link"

const NotFound = () => {
    return(
        <div className="flex flex-col item-center justify-center mt-60">
            <h1 className="font-bold text-blue-600 text-9xl">404</h1>
            <h6 className="text-5xl font-bold text-gray-600">
                <span className="text-red-500">Oops!</span>Page Not Found
                </h6>
        </div>
    )
}

export default NotFound;