import Image from "next/image"
const patner = () => {
    return (
        <div className="my-10">
            <div className="relative">
                <Image
                    src="/solution-providers-hero.jpg"
                    width={1920}
                    height={700}
                    alt="daddy"
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 flex justify-center flex-col text-white w-2/3 text-wrap px-5 sm:px-10 md:px-20">
                    <div className="text-wrap">
                        <h1 className="text-3xl sm:text-4xl font-bold">
                            Solution Providers
                        </h1>
                        <p className="text-xl sm:text-2xl font-medium my-3">
                            With PayPal already built in, these solution providers can help make running and growing your business, from ecommerce to financial management, a breeze.                        </p>
                    </div>

                </div>
            </div>



            <div className="py-8 px-4">
                <div className="flex flex-col py-20 px-20 md:flex-row justify-center items-center md:space-x-12 space-y-6 md:space-y-0">
                    <div className="text-center md:text-left space-y-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-600">
                            Exclusive offer for PayPal customers - Get 25% off on Zoho Books or any other Zoho financial suite of products
                        </h1>
                        <p className="text-lg sm:text-xl md:text-xl font-semibold text-blue-600">
                            Order management, invoicing or accounting - With Zoho get it all in one place.
                        </p>
                        <div className="mt-4">
                            <a
                                href="#learn-more"
                                className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                            >
                                Know More
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/laptop.png"
                            width={700}
                            height={700}
                            alt="Zoho Offer"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>


        </div>
    )
}
export default patner