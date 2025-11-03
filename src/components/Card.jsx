import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg w-full" src="data:image/jpeg;base64,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" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}