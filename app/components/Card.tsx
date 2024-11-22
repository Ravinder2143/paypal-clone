import Image from "next/image";

const Card = () => {
    return (
        <div className="px-4 sm:px-20 py-10 space-y-10 sm:space-y-0 sm:flex sm:justify-center sm:items-center sm:space-x-6 sm:flex-row flex-col">
            {/* First Card */}
            <div className="flex flex-col items-center sm:items-start">
                <Image
                    className="rounded-xl"
                    src="/chori.jpeg"
                    width={500}
                    height={376}
                    alt="logo"
                />
                <div className="space-y-5 py-4 text-center sm:text-left">
                    <div className="text-blue-800 text-2xl sm:text-3xl font-bold">
                        <span>The world is your shopping mall.</span>
                    </div>
                    <div className="text-blue-800 text-base sm:text-xl">
                        <span>
                            From big brands to little boutiques, you can shop
                            safely at over millions of online stores with PayPal.
                        </span>
                    </div>
                    <div>
                        <button className="text-white border border-white font-bold py-2 px-6 rounded-full transition duration-300 hover:bg-white hover:text-black bg-blue-900">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Second Card */}
            <div className="flex flex-col items-center sm:items-start">
                <Image
                    className="rounded-xl"
                    src="/WhatsApp Image 2024-11-19 at 9.05.31 PM.jpeg"
                    width={500}
                    height={376}
                    alt="logo"
                />
                <div className="space-y-5 py-4 text-center sm:text-left">
                    <div className="text-blue-800 text-2xl sm:text-3xl font-bold">
                        <span>The world is your shopping mall.</span>
                    </div>
                    <div className="text-blue-800 text-base sm:text-xl">
                        <span>
                            From big brands to little boutiques, you can shop
                            safely at over millions of online stores with PayPal.
                        </span>
                    </div>
                    <div>
                        <button className="text-white border border-white font-bold py-2 px-6 rounded-full transition duration-300 hover:bg-white hover:text-black bg-blue-900">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Third Card */}
            <div className="flex flex-col items-center sm:items-start">
                <Image
                    className="rounded-xl"
                    src="/WhatsApp Image 2024-11-19 at 9.05.38 PM (2).jpeg"
                    width={500}
                    height={376}
                    alt="logo"
                />
                <div className="space-y-5 py-4 text-center sm:text-left">
                    <div className="text-blue-800 text-2xl sm:text-3xl font-bold">
                        <span>The world is your shopping mall.</span>
                    </div>
                    <div className="text-blue-800 text-base sm:text-xl">
                        <span>
                            From big brands to little boutiques, you can shop
                            safely at over millions of online stores with PayPal.
                        </span>
                    </div>
                    <div>
                        <button className="text-white border border-white font-bold py-2 px-6 rounded-full transition duration-300 hover:bg-white hover:text-black bg-blue-900">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
