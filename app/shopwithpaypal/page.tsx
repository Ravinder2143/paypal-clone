"use client";
import Image from "next/image";

const shop = () => {
    return (
        <div className="py-16">

            {/* Header Section */}
            <div className="flex justify-center items-center text-3xl sm:text-4xl text-blue-600 font-bold mb-8">
                <p>Millions of stores accept PayPal</p>
            </div>

            {/* Store Logos Section */}
            <div className="flex flex-wrap justify-center items-center py-12 space-y-8 sm:space-y-0 sm:space-x-8">
                {/* First Row of Logos */}
                <div className="w-1/2 sm:w-1/4 flex justify-center">
                    <a href="https://www.amazon.in/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/download (2).png"
                            width={120}
                            height={120}
                            alt="Amazon logo"
                        />
                    </a>
                </div>
                <div className="w-1/2 sm:w-1/4 flex justify-center">
                    <a href="https://www.flipkart.com/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images.jfif"
                            width={120}
                            height={120}
                            alt="Flipkart logo"
                        />
                    </a>
                </div>
                <div className="w-1/2 sm:w-1/4 flex justify-center">
                    <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/download.png"
                            width={120}
                            height={120}
                            alt="Example logo"
                        />
                    </a>
                </div>
                <div className="w-1/2 sm:w-1/4 flex justify-center">
                    <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/download (1).png"
                            width={120}
                            height={120}
                            alt="Example logo 2"
                        />
                    </a>
                </div>
            </div>

            {/* Second Row of Logos */}
            <div className="flex flex-wrap justify-center items-center py-12 space-y-8 sm:space-y-0 sm:space-x-8">
                <div className="w-1/2 sm:w-1/4 flex justify-center">
                    <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/spotify-premium.png"
                            width={120}
                            height={120}
                            alt="Spotify logo"
                        />
                    </a>
                </div>
                <div className="w-1/2 sm:w-1/4 flex justify-center">
                    <a href="https://www.asos.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/asos.png"
                            width={120}
                            height={120}
                            alt="Asos logo"
                        />
                    </a>
                </div>
                <div className="w-1/2 sm:w-1/4 flex justify-center">
                    <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/download (1).jfif"
                            width={120}
                            height={120}
                            alt="Example logo 3"
                        />
                    </a>
                </div>
                <div className="w-1/2 sm:w-1/4 flex justify-center">
                    <a href="https://www.foodpanda.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/foodpanda.png"
                            width={120}
                            height={120}
                            alt="FoodPanda logo"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default shop;
