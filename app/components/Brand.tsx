import Image from "next/image";

const Brand = () => {
    return (
        <div className="py-16">
            {/* Heading */}
            <div className="flex justify-center items-center text-3xl sm:text-4xl text-blue-600 font-bold">
                <p>Shop from brands you love.</p>
            </div>

            {/* Brands Grid */}
            <div className="flex flex-wrap justify-center items-center py-12 gap-6">
                <div className="w-1/2 sm:w-1/5 flex justify-center">
                    <Image
                        src="/spotify-premium.png"
                        width={120}
                        height={120}
                        alt="Spotify logo"
                    />
                </div>
                <div className="w-1/2 sm:w-1/5 flex justify-center">
                    <Image
                        src="/asos.png"
                        width={120}
                        height={120}
                        alt="Asos logo"
                    />
                </div>
                <div className="w-1/2 sm:w-1/5 flex justify-center">
                    <Image
                        src="/grab.png"
                        width={120}
                        height={120}
                        alt="Grab logo"
                    />
                </div>
                <div className="w-1/2 sm:w-1/5 flex justify-center">
                    <Image
                        src="/qoo10.png"
                        width={120}
                        height={120}
                        alt="Qoo10 logo"
                    />
                </div>
                <div className="w-1/2 sm:w-1/5 flex justify-center">
                    <Image
                        src="/foodpanda.png"
                        width={120}
                        height={120}
                        alt="Foodpanda logo"
                    />
                </div>
            </div>
        </div>
    );
};

export default Brand;
