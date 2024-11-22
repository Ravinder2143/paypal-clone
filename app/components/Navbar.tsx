"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [isHoveredIndividual, setIsHoveredIndividual] = useState(false);
    const [isHoveredBusiness, setIsHoveredBusiness] = useState(false);
    const [isHoveredPartners, setIsHoveredPartners] = useState(false);
    const [isHoveredUsefulInfo, setIsHoveredUsefulInfo] = useState(false);

    return (
        <nav className="bg-white w-full">
            <div className="flex justify-between items-center px-4 sm:px-10 my-5">
                {/* Logo */}
                <div>
                    <Link href="/" >
                        <Image
                            src="/pp-logo-200px.png"
                            width={150}
                            height={200}
                            alt="logo"
                        />
                    </Link>
                </div>

                {/* Navbar Links */}
                <div className="hidden sm:flex flex-row space-x-6 text-xl font-bold text-neutral-800">
                    {/* INDIVIDUAL Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsHoveredIndividual(true)}
                        onMouseLeave={() => setIsHoveredIndividual(false)}
                    >
                        <Link href="" className="text-xl font-bold text-neutral-800 hover:text-blue-500">
                            INDIVIDUAL
                        </Link>
                        {isHoveredIndividual && (
                            <div
                                className="absolute w-96 flex justify-center items-center top-full left-0 mt-2 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-4  z-50"
                                onMouseEnter={() => setIsHoveredIndividual(true)}
                                onMouseLeave={() => setIsHoveredIndividual(false)}
                            >
                                <div className="flex flex-wrap gap-2">
                                    {/* Options for INDIVIDUAL */}
                                    <div className="flex justify-center items-center space-x-4">
                                        <div>
                                            <Link href="/shopwithpaypal">
                                                <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                                                    Shop with PayPal
                                                </button>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="/Buyerprotection">
                                                <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                                                    Buyer Protection
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* BUSINESS Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsHoveredBusiness(true)}
                        onMouseLeave={() => setIsHoveredBusiness(false)}
                    >
                        <Link href="/business" className="text-xl font-bold text-neutral-800 hover:text-blue-500">
                            BUSINESS
                        </Link>
                        {isHoveredBusiness && (
                            <div
                                className="absolute w-96 flex justify-center items-center top-full left-0 mt-2 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-4  z-50"
                                onMouseEnter={() => setIsHoveredBusiness(true)}
                                onMouseLeave={() => setIsHoveredBusiness(false)}
                            >
                                <div className="flex flex-wrap gap-2">
                                    {/* Options for BUSINESS */}
                                    <div className="flex justify-center items-center space-x-4">
                                        <div>
                                            <Link href="/solutions">
                                                <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                                                    Solutions
                                                </button>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="/accept-payments">
                                                <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                                                    Accept Payments
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* PARTNERS Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsHoveredPartners(true)}
                        onMouseLeave={() => setIsHoveredPartners(false)}
                    >
                        <Link href="/partners" className="text-xl font-bold text-neutral-800 hover:text-blue-500">
                            PARTNERS
                        </Link>
                        {isHoveredPartners && (
                            <div
                                className="absolute w-96 flex justify-center items-center top-full left-0 mt-2 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-4  z-50"
                                onMouseEnter={() => setIsHoveredPartners(true)}
                                onMouseLeave={() => setIsHoveredPartners(false)}
                            >
                                <div className="flex flex-wrap gap-2">
                                    {/* Options for PARTNERS */}
                                    <div className="flex justify-center items-center space-x-4">
                                        <div>
                                            <Link href="/partner-with-us">
                                                <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                                                    Partner With Us
                                                </button>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="/partner-directory">
                                                <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                                                    Partner Directory
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* USEFUL INFO Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsHoveredUsefulInfo(true)}
                        onMouseLeave={() => setIsHoveredUsefulInfo(false)}
                    >
                        <Link href="/useful-info" className="text-xl font-bold text-neutral-800 hover:text-blue-500">
                            USEFUL INFO
                        </Link>
                        {isHoveredUsefulInfo && (
                            <div
                                className="absolute w-96 flex justify-center items-center top-full left-0 mt-2 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-4 w-96 z-50"
                                onMouseEnter={() => setIsHoveredUsefulInfo(true)}
                                onMouseLeave={() => setIsHoveredUsefulInfo(false)}
                            >
                                <div className="flex flex-wrap gap-2">
                                    {/* Options for USEFUL INFO */}
                                    <div className="flex justify-center items-center space-x-4">
                                        <div>
                                            <Link href="/solutions">
                                                <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                                                    Online Security
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sign Up and Login Buttons (Always visible, aligned to the right) */}
                <div className="hidden sm:flex justify-center space-x-7">
                    <Link href="/signup">
                        <button className="bg-blue-500 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-full shadow-md transition duration-300">
                            Sign Up
                        </button>
                    </Link>
                    <Link href="/login">
                        <button className="bg-blue-500 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-full shadow-md transition duration-300">
                            Login
                        </button>
                    </Link>
                </div>

                {/* Mobile View (Hamburger Menu) */}
                <div className="sm:hidden flex items-center space-x-4">
                    <button className="text-neutral-800">
                        {/* Hamburger icon for mobile view */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
