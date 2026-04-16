import React from 'react';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3f4f6] px-4 text-center font-sans">
            
            <h1 className="text-[120px] font-black text-[#0f664c] leading-none mb-4">
                404
            </h1>
            <h2 className="text-2xl font-bold text-[#054194] mb-3">
                Page Not Found
            </h2>
            <p className="max-w-md text-gray-500 mb-8 text-lg leading-relaxed">
                Oops! The page you are looking for doesn't exist or has been moved..... <br />
                Please check the URL or go back to the HomePage.
            </p>
            <a 
                href="/" 
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium py-2.5 px-6 rounded-md transition-all duration-200 shadow-sm"
            >
                Go Home
            </a>
        </div>
    );
};

export default Error;

