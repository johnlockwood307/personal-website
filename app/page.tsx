"use client"
import { useState } from "react";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import RecentlyPlayed from "./components/RecentlyPlayed";

export default function Home() {
    const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);

    return (<div className="flex flex-col gap-y-10">
        <Gallery activeGalleryIndex={activeGalleryIndex} setActiveGalleryIndex={setActiveGalleryIndex}/>

        <section id="albums">
            <Header text="Albums I've been listening to recently"/>
            <RecentlyPlayed/>
        </section>
    </div>);
}
