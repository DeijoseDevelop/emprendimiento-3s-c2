import womanImage from "@/assets/Layer 1.png";
import Image from "next/image";

const Section1 = () => {
    return (
        <div className="w-full bg-white flex flex-col items-center justify-center py-12 px-6 md:px-12 lg:flex-row lg:space-x-20">
            <div className="relative md:absolute md:top-16 md:right-28 md:transform md:translate-x-10 md:-translate-y-6">
                <button className="bg-white text-blue-800 font-bold border border-2 border-blue-800 rounded-xl px-4 py-2 hover:bg-blue-100 transition">
                    Ve la app
                </button>
            </div>
            {/* Texto */}
            <div className="flex flex-col space-y-6 mt-20 md:mt-0">
                <h1 className="text-4xl font-bold text-black">
                    Descubre Cartagena a tu ritmo con
                </h1>
                <h2 className="text-5xl font-bold text-[#3ABEF9]">Experience Now</h2>
                <p className="text-lg text-gray-600">
                    Tu guía turística personalizada con inteligencia artificial
                </p>
                <button className={`w-48 bg-[#050C9C] text-white text-lg font-semibold px-6 py-3 rounded-2xl hover:bg-blue-700 transition`}>
                    Conoce más
                </button>
            </div>

            {/* Imagen */}
            <div className="md:w-[30%] relative">
                <Image
                    src={womanImage}
                    alt="Chica sosteniendo teléfono"
                    className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute top-12 right-12 w-16 h-16 bg-blue-400 rounded-full opacity-40 blur-xl"></div>
                <div className="absolute top-24 right-0 w-10 h-10 bg-blue-200 rounded-full opacity-60 blur-xl"></div>
            </div>
        </div>
    );
};

export default Section1;
