import Image from 'next/image';
import image2 from "@/assets/Models2.png";

export default function Section5() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Contenido principal */}
            <div className="flex flex-col md:flex-row w-full h-full relative z-10">
                {/* Lado izquierdo con imagen y degradado */}
                <div className="relative w-full md:w-full h-full hidden md:block">
                    {/* Imagen principal */}
                    <Image
                        src={image2}
                        alt="Persona sonriente en Cartagena"
                        layout="fill"
                        objectFit="cover"
                    />
                    {/* Degradado */}
                    <div className="absolute top-0 bottom-0 right-0 left-1/2 bg-gradient-to-r from-transparent to-white"></div>
                </div>

                {/* Lado derecho con texto */}
                <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
                    <div className="max-w-md text-center md:text-right space-y-4 p-8">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            <span className="text-blue-300">Cartagena</span> <br />
                            <span className="text-blue-300">hecha fácil:</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-black">
                            planificación <br /> eficiente
                        </h2>
                        <p className="text-lg md:text-xl text-black">
                            Convierte tus días en la ciudad en <br /> una experiencia inolvidable
                        </p>
                        <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg text-lg transition duration-300 ease-in-out">
                            Mira la app
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
