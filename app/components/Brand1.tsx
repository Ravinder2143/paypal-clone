const Brand1 = () => {
    return (
        <div className="bg-blue-900 py-10 space-y-6 px-4">
            <div>
                {/* First text block */}
                <div className="flex justify-center items-center text-3xl sm:text-4xl text-white font-bold py-5 text-center">
                    <span>Join the global community of PayPal users who are sending,</span>
                </div>

                {/* Second text block */}
                <div className="flex justify-center items-center text-3xl sm:text-4xl text-white font-bold text-center">
                    <span>spending, and receiving money securely every day.</span>
                </div>
            </div>

            {/* Button */}
            <div className="flex justify-center items-center py-6">
                <button className="bg-white text-blue-700 border border-blue-700 font-bold py-2 px-8 sm:px-9 rounded-full transition duration-300 hover:bg-blue-700 hover:text-white w-full sm:w-auto">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Brand1;
