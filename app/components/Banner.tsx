import Link from "next/link";
const Banner = () => {
    return (
        <div className="bg-blue-900 flex space-x-20 flex-col sm:flex-row justify-center items-center text-white w-full py-10 px-6 sm:px-12">

            <div className="text-center sm:text-left mb-6 sm:mb-0">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                    Looking for PayPal Business Solutions?
                </h1>
                <p className="text-lg sm:text-2xl">
                    Across regions and around the world, we are here to support you.
                </p>
            </div>


            <div>
                <Link href="/patnerwithus">
                    <button className="text-white border border-white font-bold py-2 px-6 rounded-full transition duration-300 hover:bg-white hover:text-black bg-blue-400">
                        PayPal for business
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
