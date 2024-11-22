import Image from "next/image";

const Numbers = () => {
    return (
        <div className="py-10 bg-slate-100">
            <div className="text-blue-900 text-4xl font-bold flex items-center justify-center">
                PayPal by the numbers.
            </div>
            
            {/* First Row */}
            <div className="flex flex-wrap items-center justify-center py-9 space-y-6 md:space-y-0 md:flex-row md:space-x-9">
                <div className="flex flex-row items-center space-x-3">
                    <Image
                        src="/payment-tansactions-m4-2.png"
                        width={80}
                        height={80}
                        alt="logo"
                    />
                    <span className="text-2xl font-bold text-blue-700">
                        427M active accounts.
                    </span>
                </div>
                <div className="flex flex-row items-center space-x-3">
                    <Image
                        src="/active-account-m4-1.png"
                        width={80}
                        height={80}
                        alt="logo"
                    />
                    <span className="text-2xl font-bold text-blue-700">
                        6.5B Total payment transactions.
                    </span>
                </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap items-center justify-center py-9 space-y-6 md:space-y-0 md:flex-row md:space-x-9">
                <div className="flex flex-row items-center space-x-3">
                    <Image
                        src="/payment-valume-m4-3.png"
                        width={80}
                        height={80}
                        alt="logo"
                    />
                    <span className="text-2xl font-bold text-blue-700">
                        $403.9B total payment volume.
                    </span>
                </div>
                <div className="flex flex-row items-center space-x-3">
                    <Image
                        src="/buyer-confidence-m4-4.png"
                        width={80}
                        height={80}
                        alt="logo"
                    />
                    <span className="text-2xl font-bold text-blue-700">
                        74% increase in buyer confidence.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Numbers;
