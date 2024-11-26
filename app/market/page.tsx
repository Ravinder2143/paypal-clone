"use client";
import Image from "next/image";

const market = () => {
    return (
        <div>
            <div className="flex my-10 justify-center">
                <div className="w-full max-w-4xl px-4">
                    <div className="flex justify-center items-center">
                        <div className="text-xl font-medium text-black">PayPal Complete Payments</div>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <div className="text-blue-400 text-4xl text-center font-semibold">
                            <p>Your end-to-end commerce partner for platforms & marketplaces</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <div className="text-blue-400 text-center text-base sm:text-lg md:text-xl font-medium">
                            <p>PayPal Complete Payments delivers a complete payments platform with the global scale and flexibility your business needs to stay competitive.</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-slate-400">
                <div className="flex flex-col md:flex-row justify-center items-center px-4 my-5 mx-10 space-y-8 md:space-y-0 md:space-x-8">
                    <div className="w-full md:w-1/3">
                        <h1 className="text-wrap text-2xl font-semibold text-slate-800 text-center md:text-left">We have you and your customers covered</h1>
                        <div className="mt-4">
                            <Image
                                src="/intro.png"
                                width={500}
                                height={500}
                                alt="intro image"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
                        <div className="mb-6">
                            <h1 className="text-slate-800 font-normal text-wrap text-xl">Simplify payments</h1>
                            <p>Make and accept payments, onboard customers, and manage risk with a single global platform. Experience the streamlined ease of a trusted technology stack.</p>
                        </div>
                        <div className="mb-6">
                            <h1 className="text-slate-800 font-normal text-wrap text-xl">Drive revenue</h1>
                            <p>Tap into the power of a trusted global network and offer preferred payment options used by 27+ million merchants and 360+ million consumers around the world.</p>
                        </div>
                        <div>
                            <h1 className="text-slate-800 font-normal text-wrap text-xl">Grow globally</h1>
                            <p>Scale quickly and let your customers accept and make payments in over 100 currencies across 200+ markets, while we take care of payments complexity.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex flex-col md:flex-row justify-center items-center px-4 my-5 mx-10 space-y-8 md:space-y-0 md:space-x-16">
                    <div className="w-full md:w-1/3">
                        <h1 className="text-wrap text-2xl font-semibold text-slate-800 text-center md:text-left py-4">One provider for payments and more</h1>
                        <p>Our flexible APIs let you route money seamlessly across your platform, supporting debit and credit card, regional payment methods, and PayPal transactions.</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <Image
                            src="/dashboard.png"
                            width={500}
                            height={500}
                            alt="dashboard image"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            <div className="my-5 mx-10 space-y-8">
                
                <div className="border-t-4 border-blue-500 w-full mb-6"></div> 

                <div className="flex justify-center items-center space-y-4 w-full md:w-1/2 mx-auto">
                    <div>
                        <h1 className="text-4xl font-bold text-slate-800 mt-6">World-class customer support</h1> 
                        
                        <p className="mt-4 text-base font-medium text-slate-800">We’re here for you and your customers. With support available in 17 languages across the globe, you and your customers can get help nearly wherever you are.</p>
                    </div>
                </div>

                <div className="border-t-4 border-blue-500 w-full my-6"></div> 
            </div>
        </div>
    );
};

export default market;
