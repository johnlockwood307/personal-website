"use client"
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useState, useEffect, useCallback, useRef } from "react";
import GALLERY_IMAGES from "./galleryImages";
import { CYCLE_DURATION_MS } from "./constants";

export default function Gallery() {
    const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);
    const [paused, setPaused] = useState<boolean>(false);

    const cycleNextImage = useCallback(() => {
        setActiveGalleryIndex(prev => (prev + 1) % GALLERY_IMAGES.length);
    }, []);
    
    const cyclePrevImage = useCallback(() => {
        setActiveGalleryIndex(prev => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }, []);

    // every 5 seconds, cycle to the next image
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const resetTimer = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(cycleNextImage, CYCLE_DURATION_MS);
    }, [cycleNextImage]);

    useEffect(() => {
        if (paused) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return;
        }

        resetTimer();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    }, [resetTimer, paused]);

    const handleNext = () => {
        cycleNextImage();
        if (!paused) resetTimer();
    };

    const handlePrev = () => {
        cyclePrevImage();
        if (!paused) resetTimer();
    };

    const handlePause = () => {
        if (paused) resetTimer();
        setPaused(!paused);
    };

    return (<div className="relative h-screen w-full overflow-hidden bg-black">
        {/* Cycling Images */}
        {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-900 ease-in-out ${i === activeGalleryIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                <Image
                    src={img.src} alt={`Photo from ${img.location}`} priority={i === 0} fill
                    className="object-cover"
                />

                <div className="absolute bottom-5 right-5 bg-light/60 px-1 rounded-md z-20">
                    <p className="text-dark font-bold text-sm">
                        {img.location}
                    </p>
                </div>
            </div>
        ))}

        {/* Main Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-14">
            <p className="text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold text-dark bg-light/80 rounded-md px-2 py-1 z-20">
                John Lockwood
            </p>
            <br/>
            <div className="flex flex-row items-center bg-light/80 gap-6 text-4xl px-2 py-1 rounded-md z-30">
                <a href="https://github.com/johnlockwood307" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-dark transition-all hover:text-mid hover:scale-110"/>
                </a>
                <a href="https://www.linkedin.com/in/john-lockwood-71336032b/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="text-dark transition-all hover:text-mid hover:scale-110"/>
                </a>
                <a href="mailto:johnlockwood307@gmail.com" target="_blank" rel="noopener noreferrer">
                    <IoMdMail className="text-dark transition-all hover:text-mid hover:scale-110"/>
                </a>
            </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
            {/* Previous Button */}
            <button 
                onClick={handlePrev} 
                className="group bg-black/20 hover:bg-black/50 text-white p-3 rounded-full transition-all"
                aria-label="Previous image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            {/* Next Button */}
            <button 
                onClick={handleNext} 
                className="group bg-black/20 hover:bg-black/50 text-white p-3 rounded-full transition-all"
                aria-label="Next image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
        
        {/* Pause Button */}
        <div className="absolute bottom-8 left-8 z-20 flex items-center gap-4">
            <button
                onClick={handlePause}
                className="bg-black/20 hover:bg-black/50 text-white p-3 rounded-full transition-all backdrop-blur-sm border border-white/10"
                aria-label="Pause/unpause gallery"
            >
                {paused ? (
                    /* Play Icon */
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                ) : (
                    /* Pause Icon */
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zM17.25 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                )}
            </button>
        </div>
    </div>);
}
