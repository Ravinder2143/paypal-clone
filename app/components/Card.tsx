import Image from "next/image";

const Card = () => {
    return (
        <div className="flex justify-center items-center px-20 space-x-6">
            <div>
                <Image
                    className="rounded-xl"
                    src="/chori.jpeg"
                    width={500}
                    height={376}
                    alt="logo"
                />
                <div className="space-y-5 py-4">
                    <div className="text-blue-800 text-3xl font-bold">
                        <span>The world is your shopping mall.</span>
                    </div>
                    <div className="text-blue-800 text-xl">
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

            <div>
                <Image
                    className="rounded-xl"
                    src="/WhatsApp Image 2024-11-19 at 9.05.31 PM.jpeg"
                    width={500}
                    height={376}
                    alt="logo"
                />
                <div className="space-y-5 py-4">
                    <div className="text-blue-800 text-3xl font-bold">
                        <span>The world is your shopping mall.</span>
                    </div>
                    <div className="text-blue-800 text-xl">
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

            <div>
                <Image
                    className="rounded-xl"
                    src="/WhatsApp Image 2024-11-19 at 9.05.38 PM (2).jpeg"
                    width={500}
                    height={376}
                    alt="logo"
                />
                <div className="space-y-5 py-4">
                    <div className="text-blue-800 text-3xl font-bold">
                        <span>The world is your shopping mall.</span>
                    </div>
                    <div className="text-blue-800 text-xl">
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
