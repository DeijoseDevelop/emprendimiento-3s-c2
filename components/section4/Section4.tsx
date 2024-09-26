import React from 'react'
import Image from 'next/image'
import { ChevronDownIcon } from "lucide-react"
import image6 from "@/assets/Layer 6.png";

const Section4 = () => {
    return (
        <div className="h-[90vh] bg-[#050C9C] text-blue-200 min-h-screen flex flex-col justify-center md:flex-row items-center md:justify-between justify-center md:pl-20 overflow-hidden relative">

            <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center relative z-10 gap-8 md:gap-4">
                <div className="space-y-4 max-w-md text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#3ABEF9]">
                        VIP <br className="hidden md:inline" /> Experience:
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white">
                        Descuentos y <br className="hidden md:inline" /> Soporte Multilingüe
                    </h2>
                    <p className="text-base md:text-lg">
                        Atención personalizada y accesible, <br className="hidden md:inline" /> sin importar tu idioma
                    </p>
                    <div className="relative w-full md:w-64 mx-auto md:mx-0">
                        <select
                            className="appearance-none bg-white-800 border border-blue-700 text-black py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-blue-700 focus:border-blue-500 w-full"
                            defaultValue=""
                        >
                            <option value="">
                                Elige un idioma
                            </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                            <ChevronDownIcon className="h-4 w-4" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="relative w-full w-0 h-0 md:w-[200%] md:h-[100%] mt-8 md:mt-0">
                <Image
                    src={image6}
                    alt=""
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
        </div>
    )
}

export default Section4