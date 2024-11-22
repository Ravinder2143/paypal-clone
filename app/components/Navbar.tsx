import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="bg-white  w-full">
            <div className="flex justify-center items-center justify-evenly my-5">
                <div className="">
                    <Image src="/pp-logo-200px.png"
                        width={150}
                        height={200}
                        alt="logo"
                    />
                </div>
                <div className="flex flex-row space-x-6 text-xl font-bold text-neutral-800">
                    <Link href="/individual">INDIVIDUAL</Link>
                    <Link href="/business">BUSINESS</Link>
                    <Link href="/partners">PARTNERS</Link>
                    <Link href="/useful-info">USEFUL INFO</Link>
                </div>
                <div className="flex justify-center space-x-7">
                    <Link href="/signup">
                        <button className="bg-blue-500 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-full shadow-md transition duration-300">
                            Sign Up
                        </button>
                    </Link>
                    <Link href="/login">
                        <button className="bg-blue-500 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-full shadow-md transition duration-300">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
