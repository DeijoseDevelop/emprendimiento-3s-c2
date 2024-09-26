import Image from "next/image";
import background from "@/assets/Layer 8.png";
import Images from "./Images";

const Section2 = () => {
    return (
        <div className="relative min-h-[400px] md:h-[80vh]">
            {/* Fondo */}
            <div className="min-h-[400px] md:h-[80vh] z-0 absolute top-0 left-0 w-full">
                <Image
                    src={background.src}
                    alt=""
                    priority={true}
                    quality={100}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            {/* Texto */}
            <div className="absolute top-10 left-5 p-5 z-20 text-shadow-1 w-full md:w-2/5">
                <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#3ABEF9] font-bold">
                        Recomendaciones exclusivas para ti
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl mt-4 text-white font-medium">
                        Disfruta de actividades adaptadas a tus gustos con la ayuda de IA
                    </p>
                </div>
            </div>

            {/* Imágenes */}
            <Images />
        </div>
    );
};

export default Section2;
