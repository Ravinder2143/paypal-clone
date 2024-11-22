import Image from "next/image";
const Brand = () => {
    return (
        <div className="py-16">
            <div className="flex justify-center items-center text-4xl text-blue-600 font-bold">
                <p>Shop from brands you love.</p>
            </div >
            <div className="flex justify-center items-center justify-evenly py-12 ">
                <div>
                    <Image
                        src="/spotify-premium.png"
                        width={120}
                        height={120}
                        alt="logo"
                    />
                </div>
                <div>
                    <Image
                        src="/asos.png"
                        width={120}
                        height={120}
                        alt="logo"
                    />
                </div>
                <div>
                    <Image
                        src="/grab.png"
                        width={120}
                        height={120}
                        alt="logo"
                    />
                </div>
                <div>
                    <Image
                        src="/qoo10.png"
                        width={120}
                        height={120}
                        alt="logo"
                    />
                </div>
                <div>
                    <Image
                        src="/foodpanda.png"
                        width={120}
                        height={120}
                        alt="logo"
                    />
                </div>
            </div>
        </div>

    )
}
export default Brand;