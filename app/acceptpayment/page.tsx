import Image from "next/image";
const accept = () => {
    return (
        <div>
            <div className=" relative bg-blue-900 ">
                <div className="flex justify-center items-center space-x-28 " >
                    <div className="w-1/3 space-y-5">
                        <div><p className="text-xl font-medium text-white">For Enterprise</p></div>
                        <div className="text-4xl text-wrap font-medium text-white"><h1 >Accept payments to capture more revenue</h1></div>
                        <div className="text-2xl font-medium text-white">
                            <h1>Provide a seamless and secure checkout experience and plug into our PayPal consumer network.</h1>
                        </div>
                        <div>
                            <button className="bg-white text-blue-500 border-2 border-blue-500 py-2 px-4 text-lg rounded-xl">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                    <div>
                        <Image className="absoulute bottom-0 right-0"
                            src="/hero1.png"
                            width={550}
                            height={550}
                            alt="logo"
                        />
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center text-3xl text-blue-600 font-semibold my-10">
                <h1>Looking for an out-of-the-box commerce solution?</h1>
            </div>

            <div className="bg-slate-500 relative  ">
                <div className="flex  justify-center items-center space-x-32">
                    <div className="text-4xl text-white w-1/3 text-wrap text-bold">
                        <h1 >Deliver a seamless, personalised checkout experience on the web and mobile</h1>
                    </div>
                    <div>
                        <Image className="absoulute bottom-0 right-0"
                            src="/pay-now.jpg"
                            width={550}
                            height={550}
                            alt="logo"
                        />
                    </div>
                </div>
            </div>

            <div>

                <div className="flex flex-col lg:flex-row justify-center items-center my-10 mx-4 sm:mx-10 lg:mx-20">

                    <div className="flex flex-col lg:flex-row w-full lg:w-1/2 items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
                        <div className="relative">
                            <Image
                                src="/payment.png"
                                width={200}
                                height={200}
                                alt="Payment Methods"
                            />
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="text-2xl font-semibold">
                                <h1>Give consumers their choice of payment methods</h1>
                            </div>
                            <div className="text-xl font-semibold">
                                <p>Create consistently exceptional commerce experiences by offering customers a choice of the most popular payment options.</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col lg:flex-row w-full lg:w-1/2 items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
                        <div className="relative">
                            <Image
                                src="/mobile.png"
                                width={200}
                                height={200}
                                alt="Mobile Payments"
                            />
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="text-2xl font-semibold">
                                <h1>
                                    Provide smooth, mobile-first shopping experiences that engage customers</h1>
                            </div>
                            <div className="text-xl font-semibold">
                                <p>We help you create a frustration-free checkout process with locally relevant APMs, so you develop trust and loyalty among your customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-10 px-4 sm:px-10 lg:px-20  ">
                <div className="flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10">
                    {/* First Section */}
                    <div className="flex flex-col items-center space-y-4 w-full lg:w-1/2">
                        <div>
                            <Image
                                src="/closingCTA-contact.jpg"
                                width={400}
                                height={400}
                                alt="Mobile Payments"
                            />
                        </div>
                        <div className="text-center lg:text-left w-full">
                            <h1 className="text-2xl font-semibold mt-4">Contact our sales team</h1>
                            <p className="text-xl font-semibold">Learn how payments can be leveraged as a catalyst for growth.</p>
                        </div>
                    </div>

                    {/* Second Section */}
                    <div className="flex flex-col items-center space-y-4 w-full lg:w-1/2">
                        <div>
                            <Image
                                src="/closingCTA-help.jpg"
                                width={400}
                                height={400}
                                alt="Developer Documentation"
                            />
                        </div>
                        <div className="text-center lg:text-left w-full">
                            <h1 className="text-2xl font-semibold mt-4">Explore developer documentation</h1>
                            <p className="text-xl font-semibold">See how our flexible and interoperable technology helps to simplify integration.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default accept;