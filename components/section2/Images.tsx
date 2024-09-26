"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import image1 from "@/assets/Layer 2.png";
import image2 from "@/assets/Layer 3.png";
import image3 from "@/assets/Layer 4.png";

const Images = () => {
    const [isVisible, setIsVisible] = useState(false);
    const imagesRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        if (imagesRef.current) {
            observer.observe(imagesRef.current);
        }

        return () => {
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <>
            <div
                ref={imagesRef}
                className="w-full absolute bottom-10 left-0 flex justify-center items-end space-x-4 overflow-visible z-10"
            >
                {/* Imagen 3 */}
                <div
                    className={`relative w-32 h-48 sm:w-48 sm:h-64 md:w-64 md:h-96 transform transition-all duration-700 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    } rotate-12 md:rotate-[45deg]`}
                >
                    <div className="rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src={image3.src}
                            alt="Actividad 1"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-3xl"
                        />
                    </div>
                </div>
                {/* Imagen 2 */}
                <div
                    className={`relative w-32 h-48 sm:w-48 sm:h-64 md:w-64 md:h-96 transform transition-all duration-700 delay-150 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    } rotate-6 md:rotate-[30deg]`}
                >
                    <div className="rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src={image2.src}
                            alt="Actividad 2"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-3xl"
                        />
                    </div>
                </div>
                {/* Imagen 1 - Más grande */}
                <div
                    className={`relative w-40 h-60 sm:w-56 sm:h-80 md:w-80 md:h-[34rem] transform transition-all duration-700 delay-300 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    } rotate-3 md:rotate-[15deg]`}
                >
                    <div className="rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src={image1.src}
                            alt="Actividad 3"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Images;
