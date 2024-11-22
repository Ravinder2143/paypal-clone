const Fotter = () => {
    return (
        <div className="px-16 py-14"> {/* Add horizontal padding here */}
            <div className="flex justify-between items-center border-b-2 border-black-600 py-4">
                <div className="flex space-x-4 text-black font-semibold">
                    <div>
                        <a href="">Home</a>
                    </div>
                    <div>
                        <a href="">Contact</a>
                    </div>
                    <div>
                        <a href="">Fees</a>
                    </div>
                    <div>
                        <a href="">Security</a>
                    </div>
                    <div>
                        <a href="">Shop</a>
                    </div>
                </div>
                <div className="flex">
                    <img src="india-flag.svg" alt="Indian flag" className="" />
                </div>
            </div>
            <div className="flex justify-between items-center  py-4">
                <div className="flex space-x-4 text-black font-semibold">
                    <div>
                        <a href="">About</a>
                    </div>
                    <div>
                        <a href="">Newsroom</a>
                    </div>
                    <div>
                        <a href="">Jobs</a>
                    </div>
                    <div>
                        <a href="">Developers</a>
                    </div>
                    <div>
                        <a href="">Partners</a>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <p>© 1999–2024</p>
                    <div>
                        <a href="">Accessibility</a>
                    </div>
                    <div>
                        <a href="">Cookies</a>
                    </div>
                    <div>
                        <a href="">Privacy</a>
                    </div>
                    <div>
                        <a href="">CSR</a>
                    </div>
                    <div>
                        <a href="">Annual Returns</a>
                    </div>
                </div>
            </div>

            <div className="py-5">
                <p>PayPal Services in India are provided by PayPal Payments Private Limited (CIN U74990MH2009PTC194653). Users are advised to read the terms and conditions carefully.</p>
            </div>
            <div>
                <p>When you visit or interact with our sites, services, applications, tools or messaging, we or our authorised service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster and safer experience and for advertising purposes. Learn more here.</p>
            </div>
        </div>
    );
};
export default Fotter;
