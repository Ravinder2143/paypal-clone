const Banner = () => {
    return (
        <div className="bg-blue-900 flex justify-center items-center text-white justify-evenly w-full py-10 ">
            <div>
                <h1 className="text-3xl font-bold">Looking for PayPal Business Solutions?</h1>
                <p className="text-2xl" >Across regions and around the world, we are here to support you.</p>
            </div>
            <div>
                <button className="text-white border border-white font-bold py-2 px-6 rounded-full transition duration-300 hover:bg-white hover:text-black bg-blue-400">
                    PayPal for business
                </button>
            </div>
        </div>
    )
}
export default Banner;