import Image from "next/image";
const patner = () => {
    return (
        <div className="">
            <div className="flex justify-center items-center py-10 space-x-24">
                <div className="w-1/2 space-y-8">
                    <h1 className="text-5xl font-bold text-wrap text-blue-600">Simple, secure payments worldwide.</h1>
                    <p className="text-xl font-medium text-wrap text-blue-600">Get paid easily online. See why millions of merchants trust PayPal for Business.</p>
                    <div className="flex space-x-4">
                        <a href="#sign-up" className="px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-300">Sign Up</a>
                        <a href="#contact-sales" className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300">Contact Sales</a>
                    </div>
                </div>
                <div>
                    <Image className="rounded-2xl"
                        src="/in-desktop-new-hero.webp"
                        width={400}
                        height={400}
                        alt="logo"
                    />
                </div>
            </div>


            <div className="bg-blue-900 h-full w-full py-8">
                <div className="text-center text-white">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">Keep your business safe with robust security solutions.</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-4">

                    <div className="text-center md:text-left max-w-sm">
                        <h1 className="text-2xl text-white mb-2">Real-time transaction monitoring</h1>
                        <p className="text-white mb-4">Reduce fraud risk by minimizing your exposure. PayPal analyses transactions and accounts in real-time, so you can get paid safely.</p>
                        <div>
                            <a href="#sign-up" className="px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-300">Prevent Fraud</a>
                        </div>
                    </div>

                    <div className="text-center md:text-left max-w-sm">
                        <h1 className="text-2xl text-white mb-2">Comprehensive merchant coverage</h1>
                        <p className="text-white mb-4">Avoid unnecessary losses from claims and chargebacks with PayPal’s Seller Protection programme.</p>
                        <div>
                            <a href="#sign-up" className="px-6 py-3 text-blue-400 bg-white rounded-lg hover:bg-green-600 transition-colors duration-300 hover:text-white">Safeguard Sales</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center py-8 px-4">
                <div className="text-center max-w-lg w-full">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-600 mb-4">
                        Simple transparent fees
                    </h1>
                    <p className="text-xl sm:text-2xl font-medium text-blue-600 mb-6">
                        No monthly or setup fees. Only pay when you get paid.
                    </p>
                    <div>
                        <a
                            href="#contact-sales"
                            className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            See Product and Service Fees
                        </a>

                    </div>
                </div>
            </div>


            <div className="bg-blue-900 py-8">
                <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12 px-4">

                    <div className="w-full md:w-auto">
                        <Image
                            className="rounded-2xl"
                            src="/in-split-section.webp"
                            width={400}
                            height={400}
                            alt="logo"
                        />
                    </div>


                    <div className="text-white w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Developer Resources</h1>
                        <p className="text-lg mb-6">
                            Ready to optimize and protect your business? Explore our complete set of developer resources to learn, experiment, test, and integrate.
                        </p>
                        <div>
                            <a
                                href="#contact-sales"
                                className="px-6 py-3 text-blue-900 bg-white rounded-lg transition-colors duration-300 hover:bg-gray-100">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-8 px-4 bg-gray-100">
                <div className="max-w-4xl mx-auto">

                    <h1 className="text-3xl font-semibold text-blue-900 mb-6 text-center sm:text-left">
                        Frequently Asked Questions
                    </h1>

                    {/* FAQ 1 */}
                    <div className="mb-6">
                        <p className="text-xl font-medium text-blue-700 mb-2 underline text-blue-500">
                            What is KYC requirement and the process to get started?
                        </p>
                        <div className="text-lg text-gray-700 mb-4">
                            To complete your KYC and use your PayPal account, you will need to verify your identity through the following 4 steps:
                        </div>
                        <ol className="list-decimal pl-6 text-gray-700">
                            <li>Provide your legal name and date of birth.</li>
                            <li>Submit proof of identity (such as a passport or government ID).</li>
                            <li>Provide proof of address (such as a utility bill or bank statement).</li>
                            <li>Complete any additional verification steps as required by PayPal.</li>
                        </ol>
                    </div>

                    {/* FAQ 2 */}
                    <div className="mb-6">
                        <p className="text-xl font-medium text-blue-700 mb-2 underline text-blue-500">
                            What are the benefits of using PayPal for business transactions?
                        </p>
                        <p className="text-lg text-gray-700">
                            PayPal offers fast, secure payments with global reach, along with fraud protection and easy integration into your website or app.
                        </p>
                    </div>

                    {/* FAQ 3 */}
                    <div className="mb-6">
                        <p className="text-xl font-medium text-blue-700 mb-2 underline text-blue-500">
                            Can I add PayPal if I already have a credit card processor?
                        </p>
                        <p className="text-lg text-gray-700">
                            Yes, you can. It’s easy to offer PayPal payments in addition to your existing payment methods.
                        </p>
                    </div>

                    {/* FAQ 4 */}
                    <div className="mb-6">
                        <p className="text-xl font-medium text-blue-700 mb-2 underline text-blue-500">
                            Can I accept payments without a website?
                        </p>
                        <p className="text-lg text-gray-700">
                            Yes! You can accept payments without a website. PayPal offers a variety of ways to get paid, such as:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li>PayPal.Me links: Share a personalized PayPal link for direct payments.</li>
                            <li>Invoices: Send professional invoices to your customers to request payments.</li>
                            <li>QR Codes: Generate a QR code for easy payment collection in person.</li>
                            <li>PayPal buttons: Use PayPal’s buttons for your social media or messaging apps to collect payments.</li>
                        </ul>
                        <p className="text-lg text-gray-700">
                            Learn more about these options on PayPal&aposs website.
                        </p>
                    </div>

                </div>

                {/* FAQ 5 */}
                <div className="mb-6">
                    <p className="text-xl font-medium text-blue-700 mb-2 underline text-blue-500">
                        What type of businesses can use PayPal for accepting payments?
                    </p>
                    <p className="text-lg text-gray-700">
                        PayPal provides payment solutions for businesses of all sizes, whether your&apos;s a small startup, a freelancer, or a large enterprise. Some examples of businesses that can use PayPal include:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>E-commerce businesses: Sell products directly online with seamless checkout options.</li>
                        <li>Freelancers & Consultants: Receive payments for your services or projects.</li>
                        <li>Subscription services: Manage recurring payments for membership or subscription-based models.</li>
                        <li>Non-profit organizations: Accept donations securely and efficiently.</li>
                        <li>Retailers: Accept payments in person or online.</li>
                    </ul>
                    <p className="text-lg text-gray-700">
                        Reach out to one of our account specialists if you have any questions about what PayPal solution is best for your business.
                    </p>
                </div>

            </div>





        </div>
    )
}
export default patner;