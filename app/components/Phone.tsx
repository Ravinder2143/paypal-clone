import Image from "next/image";

const Phone = () => {
    return (
        <div className="bg-blue-900 py-9 space-y-10 relative">
            {/* First Column (text and button) */}
            <div className="flex flex-col md:w-1/2 space-y-6 px-6 md:px-24">
                <div className="text-white text-3xl font-bold">
                    Make and receive payments with ease.
                </div>
                <div className="text-white space-y-4">
                    <div className="text-2xl font-bold">
                        <span>Popular payments, happy customers.</span>
                    </div>
                    <div className="text-xl font-medium">
                        Help maximise conversion and reduce cart abandonment with a wide range of digital payment options, customisable in one account.
                    </div>
                </div>
                <div>
                    <button className="text-white border border-white font-bold py-2 px-6 rounded-full transition duration-300 bg-blue-500 text-black hover:bg-blue-600 hover:text-white">
                        Send an invoice
                    </button>
                </div>
            </div>

            {/* Second Column (text and button) */}
            <div className="flex flex-col md:w-1/2 space-y-6 px-6 md:px-24">
                <div className="text-white space-y-4">
                    <div className="text-2xl font-bold">
                        <span>Invoice and get paid fast.</span>
                    </div>
                    <div className="text-xl font-medium">
                        Send unlimited invoices that customers can pay even if they don’t have a PayPal account – with Seller Protection from fraud and unauthorised transactions.3
                    </div>
                </div>
                <div>
                    <button className="text-white border border-white font-bold py-2 px-6 rounded-full transition duration-300 bg-blue-500 text-black hover:bg-blue-600 hover:text-white">
                        Send an invoice
                    </button>
                </div>
            </div>

            {/* Image */}
            <div className="absolute right-10 top-16 md:top-16 md:right-16">
                <Image
                    className="w-80 h-auto md:w-[500px] md:h-[500px]"
                    src="/1234.png"
                    width={500}
                    height={500}
                    alt="logo"
                />
            </div>
        </div>
    );
};

export default Phone;
