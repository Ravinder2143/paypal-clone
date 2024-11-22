const Fotter = () => {
    return (
        <div className="px-4 sm:px-16 py-10"> {/* Padding adjustments for smaller screens */}
            {/* First Section: Navigation Links */}
            <div className="flex flex-col sm:flex-row justify-between items-center border-b-2 border-black-600 py-4">
                <div className="flex flex-wrap justify-center sm:justify-start space-x-4 text-black font-semibold mb-4 sm:mb-0">
                    <div><a href="">Home</a></div>
                    <div><a href="">Contact</a></div>
                    <div><a href="">Fees</a></div>
                    <div><a href="">Security</a></div>
                    <div><a href="">Shop</a></div>
                </div>
                <div className="flex justify-center sm:justify-start">
                    <img src="india-flag.svg" alt="Indian flag" className="w-16 h-auto" />
                </div>
            </div>

            {/* Second Section: Additional Links and Copyright */}
            <div className="flex flex-col sm:flex-row justify-between items-center py-4">
                <div className="flex flex-wrap justify-center sm:justify-start space-x-4 text-black font-semibold mb-4 sm:mb-0">
                    <div><a href="">About</a></div>
                    <div><a href="">Newsroom</a></div>
                    <div><a href="">Jobs</a></div>
                    <div><a href="">Developers</a></div>
                    <div><a href="">Partners</a></div>
                </div>
                <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
                    <p>© 1999–2024</p>
                    <div><a href="">Accessibility</a></div>
                    <div><a href="">Cookies</a></div>
                    <div><a href="">Privacy</a></div>
                    <div><a href="">CSR</a></div>
                    <div><a href="">Annual Returns</a></div>
                </div>
            </div>

            {/* Additional Info Sections */}
            <div className="py-5 text-center sm:text-left">
                <p>PayPal Services in India are provided by PayPal Payments Private Limited (CIN U74990MH2009PTC194653). Users are advised to read the terms and conditions carefully.</p>
            </div>
            <div className="text-center sm:text-left">
                <p>When you visit or interact with our sites, services, applications, tools or messaging, we or our authorised service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster and safer experience and for advertising purposes. Learn more here.</p>
            </div>
        </div>
    );
};

export default Fotter;
