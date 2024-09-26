import Image from 'next/image';
import womanImage from "@/assets/Layer 5.png";

const Section3 = () => {
    return (
        <div className="relative w-full max-h-[95vh] h-[100vh] overflow-hidden">
            {/* Texto */}
            <div className="absolute top-10 left-5 p-5 z-10 w-full md:w-2/5">
                <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#3ABEF9] font-bold">
                        Reseñas y Calificaciones en Tiempo Real
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl mt-4 text-black font-medium">
                        Explora lo mejor de Cartagena según otros viajeros
                    </p>
                </div>
                {/* Botón */}
                <button
                    className="bg-[#050C9C] rounded-[20px] text-white font-bold px-6 py-4 text-lg sm:text-xl"
                >
                    Descárgala ya
                </button>
            </div>

            {/* Imagen */}
            <div className="w-full h-full relative">
                <Image
                    src={womanImage}
                    alt=""
                    priority={true}
                    quality={100}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                />
            </div>
        </div>
    );
};

export default Section3;
