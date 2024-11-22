"use client";
import Image from "next/image";

const buyer = () => {
    return (
        <div className="my-10">

           
            <div className="relative">
                <Image 
                    src="/hero-buyerprotec.jpg"
                    width={1920}
                    height={700}
                    alt="daddy"
                    className="w-full h-auto"
                />
            </div>

            
            <div className="absolute inset-0 flex justify-center flex-col text-white w-2/3 text-wrap px-5 sm:px-10 md:px-20">
                <div className="text-wrap">
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        Pay it safe.
                    </h1>
                    <p className="text-xl sm:text-2xl font-medium my-3">
                        Protect your purchases with PayPal. If you don’t receive your order, <br /> or it shows up different than described, <br /> PayPal Buyer Protection will help you get reimbursed for eligible items. Terms and limitations apply.
                    </p>
                </div>
                <div className="flex justify-center mt-10">
                    <button className="text-white border border-white font-bold py-2 px-6 rounded-md transition duration-300 hover:bg-white hover:text-black">
                        Sign Up
                    </button>
                </div>
            </div>

            
            <div className="flex justify-center items-center text-2xl sm:text-3xl font-semibold mt-10">
                <h1>A safer choice at checkout</h1>
            </div>

            
            <div className="flex flex-wrap justify-evenly items-center text-xl sm:text-2xl font-semibold mx-4 sm:mx-16 py-12">
                <div className="text-wrap w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                    <Image
                        src="/fraud.svg"
                        width={200}
                        height={200}
                        alt="fraud"
                        className="mx-auto"
                    />
                    <div className="text-center mt-4">Online purchases</div>
                    <div className="text-center mt-2">
                        <p>In case your item doesn’t match its description,<br /> is defective or doesn’t turn up at all,<br /> we’ve got your back.</p>
                    </div>
                </div>

                <div className="text-wrap w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                    <Image
                        src="/acctprotect.svg"
                        width={200}
                        height={200}
                        alt="account protection"
                        className="mx-auto"
                    />
                    <div className="text-center mt-4">Custom made</div>
                    <div className="text-center mt-2">
                        <p>Have your custom-made, leather dancing boots failed to make it to your door? Our Buyer Protection now covers eligible custom-made items too.</p>
                    </div>
                </div>

                <div className="text-wrap w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                    <Image
                        src="/icon-blue-resolutioncenter.svg"
                        width={200}
                        height={200}
                        alt="resolution center"
                        className="mx-auto"
                    />
                    <div className="text-center mt-4">Intangibles</div>
                    <div className="text-center mt-2">
                        <p>In case an event is cancelled, your hotel is double-booked, <br /> or the new game you purchased couldn’t <br /> be downloaded, we’ve got you covered.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default buyer;
