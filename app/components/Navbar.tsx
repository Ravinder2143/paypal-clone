"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if the mobile menu is open
    const [activeDropdown, setActiveDropdown] = useState(null); // To track active dropdown

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown); // Toggle dropdown visibility
    };

    return (
        <nav className="bg-white w-full">
            <div className="flex justify-between items-center px-4 sm:px-10 my-5">
                {/* Logo */}
                <div>
                    <Link href="/">
                        <Image
                            src="/pp-logo-200px.png"
                            width={150}
                            height={200}
                            alt="logo"
                        />
                    </Link>
                </div>

                {/* Main Navigation Links */}
                <div className="hidden sm:flex flex-row space-x-6 text-xl font-bold text-neutral-800">
                    {/* INDIVIDUAL Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('individual')}
                            className="text-xl font-bold text-neutral-800 hover:text-blue-500"
                        >
                            INDIVIDUAL
                        </button>
                        {activeDropdown === 'individual' && (
                            <div className="absolute w-96 top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-4 z-50 transition-opacity duration-200 ease-in-out">
                                <div className="flex flex-wrap gap-2">
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
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('business')}
                            className="text-xl font-bold text-neutral-800 hover:text-blue-500"
                        >
                            BUSINESS
                        </button>
                        {activeDropdown === 'business' && (
                            <div className="absolute w-96 top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-4 z-50 transition-opacity duration-200 ease-in-out">
                                <div className="flex flex-wrap gap-2">
                                    <div className="flex justify-center items-center space-x-4">
                                        <div>
                                            <Link href="/market">
                                                <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                                                    Marketplaces & Partners
                                                </button>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="/acceptpayment">
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
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('partners')}
                            className="text-xl font-bold text-neutral-800 hover:text-blue-500"
                        >
                            PARTNERS
                        </button>
                        {activeDropdown === 'partners' && (
                            <div className="absolute w-96 top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-4 z-50 transition-opacity duration-200 ease-in-out">
                                <div className="flex flex-wrap gap-2">
                                    <div className="flex justify-center items-center space-x-4">
                                        <div>
                                            <Link href="/patnerwithus">
                                                <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                                                    Partner With Us
                                                </button>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="/patnerdirectory">
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
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('usefulInfo')}
                            className="text-xl font-bold text-neutral-800 hover:text-blue-500"
                        >
                            USEFUL INFO
                        </button>
                        {activeDropdown === 'usefulInfo' && (
                            <div className="absolute w-96 top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-4 z-50 transition-opacity duration-200 ease-in-out">
                                <div className="flex flex-wrap gap-2">
                                    <div className="flex justify-center items-center space-x-4">
                                        <div>
                                            <Link href="/compliance">
                                                <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                                                    PCI Compliance
                                                </button>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="/help">
                                                <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                                                    Help Centre
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sign Up and Login Buttons */}
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
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-neutral-800"
                    >
                        {/* Hamburger icon for mobile view */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gradient-to-r from-blue-500 to-purple-600`}>
                <div className="flex flex-col items-center space-y-4 py-4">
                    <Link href="/shopwithpaypal">
                        <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                            Shop with PayPal
                        </button>
                    </Link>
                    <Link href="/Buyerprotection">
                        <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                            Buyer Protection
                        </button>
                    </Link>
                    <Link href="/market">
                        <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                            Marketplaces & Partners
                        </button>
                    </Link>
                    <Link href="/acceptpayment">
                        <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                            Accept Payments
                        </button>
                    </Link>
                    <Link href="/patnerwithus">
                        <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                            Partner With Us
                        </button>
                    </Link>
                    <Link href="/patnerdirectory">
                        <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                            Partner Directory
                        </button>
                    </Link>
                    <Link href="/compliance">
                        <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                            PCI Compliance
                        </button>
                    </Link>
                    <Link href="/help">
                        <button className="w-full py-2 px-4 text-white text-lg font-semibold hover:bg-blue-700 rounded">
                            Help Centre
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
