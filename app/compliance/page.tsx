import Image from "next/image";
const compliance = () => {
    return (
        <div>
            <div className="bg-slate-700">
                <div className="flex flex-col items-center px-4 py-8 mx-20">
                    <div>
                        <h1 className="text-4xl sm:text-5xl text-white font-semibold text-center">
                            We’ve got what you need for PCI DSS compliance.
                        </h1>
                    </div>
                    <div className="mt-4">
                        <p className="text-xl sm:text-2xl text-white font-medium text-center">
                            If you’re looking to accept credit or debit card payments, you need to meet certain payment card security standards – PCI compliance – to ensure your customers’ information is protected. When we process payments for you, you can spend less time detailing with data security and more time growing your business.
                        </p>
                    </div>
                    <div className="mt-6">
                        <a
                            href="#get-started"
                            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                            Get Started Now
                        </a>
                    </div>
                </div>
            </div>


            <div>
                <div className="flex flex-col items-center px-4 py-8 mx-32">
                    <div>
                        <h1 className="text-4xl sm:text-5xl text-black font-semibold text-center">
                            What it’s all about.
                        </h1>
                    </div>
                    <div className="mt-4">
                        <p className="text-xl sm:text-2xl text-black font-medium text-center">
                            PCI DSS (Payment Card Industry Data Security Standard) is a set of comprehensive requirements that all businesses who handle credit and debit payments must comply with, regardless of size or number of transactions they process. The requirements for maintaining PCI compliance include completion of an annual PCI self-assessment questionnaire and a quarterly network scan.                        </p>
                    </div>

                </div>
            </div>


            <div className="px-4 py-8 ">
                <div className="flex flex-col md:flex-row items-center justify-center px-32 space-x-20">
                    <div className="mb-6 md:mb-0 md:w-1/2">
                        <h1 className="text-3xl sm:text-4xl text-slate-600 font-semibold text-center md:text-left">
                            Grow customer trust.
                        </h1>
                        <p className="text-lg sm:text-2xl text-slate-600 font-medium text-center md:text-left mt-4">
                            PayPal stores customers’ credit and debit card account information. We don’t even share it with you, so you don’t need to worry about putting their data at risk. By accepting PayPal, you’re telling your customers you take their data security seriously.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Image
                            src="/mobile-device-payment-cards.jpg"
                            width={300}
                            height={300}
                            alt="mobile payment"

                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Web Payments & Business Solutions</h1>

                <div className="flex flex-wrap justify-center gap-8">
                    {/* First Column */}
                    <div className="flex-1 min-w-[250px] max-w-[300px] space-y-4">
                        <h2 className="text-xl font-semibold text-blue-600">Web Payments</h2>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li><a href="#paypal-checkout" className="hover:text-blue-600">PayPal Checkout</a></li>
                            <li><a href="#compare-solutions" className="hover:text-blue-600">Compare Solutions</a></li>
                            <li><a href="#invoicing" className="hover:text-blue-600">Invoicing</a></li>
                            <li><a href="#paypal-online-invoicing" className="hover:text-blue-600">PayPal Online Invoicing</a></li>
                        </ul>
                    </div>

                    {/* Second Column */}
                    <div className="flex-1 min-w-[250px] max-w-[300px] space-y-4">
                        <h2 className="text-xl font-semibold text-blue-600">Partner Solutions</h2>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li><a href="#partner-directory" className="hover:text-blue-600">Partner Directory</a></li>
                            <li><a href="#partner-programme" className="hover:text-blue-600">Partner Programme</a></li>
                            <li><a href="#developers" className="hover:text-blue-600">Developers</a></li>
                            <li><a href="#other-products" className="hover:text-blue-600">Other Products</a></li>
                        </ul>
                    </div>

                    {/* Third Column */}
                    <div className="flex-1 min-w-[250px] max-w-[300px] space-y-4">
                        <h2 className="text-xl font-semibold text-blue-600">Business Resources</h2>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li><a href="#paypal-business-app" className="hover:text-blue-600">PayPal Business App</a></li>
                            <li><a href="#paypal-me" className="hover:text-blue-600">PayPal.Me</a></li>
                            <li><a href="#set-up-integrate" className="hover:text-blue-600">Set-up and Integrate PayPal</a></li>
                            <li><a href="#best-practices-checkout" className="hover:text-blue-600">Best Practice for Checkout</a></li>
                        </ul>
                    </div>

                    {/* Fourth Column */}
                    <div className="flex-1 min-w-[250px] max-w-[300px] space-y-4">
                        <h2 className="text-xl font-semibold text-blue-600">Business Tools & Support</h2>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li><a href="#selling-online-ebay" className="hover:text-blue-600">Selling Online with eBay</a></li>
                            <li><a href="#getting-started" className="hover:text-blue-600">Getting Started for Business</a></li>
                            <li><a href="#business-tool-kit" className="hover:text-blue-600">Business Tool Kit</a></li>
                            <li><a href="#technical-support" className="hover:text-blue-600">Technical Support for Integrations</a></li>
                        </ul>
                    </div>

                    {/* Fifth Column */}
                    <div className="flex-1 min-w-[250px] max-w-[300px] space-y-4">
                        <h2 className="text-xl font-semibold text-blue-600">Information & Guides</h2>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li><a href="#business-resource-center" className="hover:text-blue-600">Business Resource Center</a></li>
                            <li><a href="#best-practices-guide" className="hover:text-blue-600">Best Practices Guide</a></li>
                            <li><a href="#fira" className="hover:text-blue-600">Foreign Inward Remittance Advise (FIRA)</a></li>
                            <li><a href="#confirm-identity" className="hover:text-blue-600">Confirm Your Identity (KYC)</a></li>
                        </ul>
                    </div>

                    {/* Sixth Column */}
                    <div className="flex-1 min-w-[250px] max-w-[300px] space-y-4">
                        <h2 className="text-xl font-semibold text-blue-600">Security & Compliance</h2>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li><a href="#fraud-prevention" className="hover:text-blue-600">Fraud Prevention Business Tips</a></li>
                            <li><a href="#pci-compliance" className="hover:text-blue-600">PCI Compliance</a></li>
                            <li><a href="#understanding-chargebacks" className="hover:text-blue-600">Understanding Chargebacks</a></li>
                            <li><a href="#manage-business-account" className="hover:text-blue-600">Manage Your Business Account</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default compliance;