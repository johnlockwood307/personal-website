"use client"
import { IconType } from "react-icons";
import { FaLink, FaGithub } from "react-icons/fa";

import { useState, useEffect } from "react";
import { CYCLE_DURATION_MS, NUM_DISPLAY_ALBUMS } from "./constants";

import Image, { StaticImageData } from "next/image";
import GALLERY_IMAGES from "./galleryImages";
import IMG_BMT from "@/public/project_images/IMG_BMT.png";
import IMG_CS410 from "@/public/project_images/IMG_CS410.jpg";
import IMG_ANAGRAMS from "@/public/project_images/IMG_ANAGRAMS.png";

interface ProjectLinkProps {
    // link, github, ...
    linkType: string,
    url: string
}

const linkIconDict = new Map<string, IconType>([
    ["link", FaLink],
    ["github", FaGithub]
])

function ProjectLink({linkType, url} : ProjectLinkProps) {  
    const T = linkIconDict.get(linkType);
    
    if (T) {
        return (<a href={url} target="_blank" rel="noopener noreferrer">
            <T className="text-dark transition-all hover:text-foreground hover:scale-110 text-3xl"/>
        </a>);
    } else {
        return (<></>);
    }
}

interface ProjectType {
    img: string | StaticImageData,
    name: string,
    description: string,
    linkIcons?: ProjectLinkProps[],
    useGalleryImages?: boolean,
    activeGalleryIndex?: number
}

const projects = [
    {
        img: GALLERY_IMAGES[0].src,
        name: "This Website",
        description: `Personal website built with React, Next.js, and Tailwind CSS. Deployed by Vercel. Showcases experience, education, and projects. Uses Spotify Web API to determine ${NUM_DISPLAY_ALBUMS} albums I've listened to recently.`,
        linkIcons: [
            {linkType: "link", url: "https://johnlockwood.dev"},
            {linkType: "github", url: "https://github.com/johnlockwood307/personal-website"}
        ],
        useGalleryImages: true
    },
    {
        img: IMG_CS410,
        name: "CS 0410 Spring '26",
        description: "Created course website for Brown CSCI 0410: Foundations of AI and Machine Learning. Set assignment links to release automatically based on predetermined dates. Integrated Google Calendar.",
        linkIcons: [
            {linkType: "link", url: "https://browncsci410.github.io/ai-website-s26/"}
        ],
    },
    {
        img: IMG_BMT,
        name: "Brown Mock Trial",
        description: "Through Full Stack at Brown, revamped legacy site into modern Next.js application. Delivered a fully reponsive, accessibility-compliant interface. Integrated automated CI/CD deployments on Vercel.",
        linkIcons: [
            {linkType: "link", url: "https://project-brown-mock-trial.vercel.app/"}
        ]
    },
    {
        img: IMG_ANAGRAMS,
        name: "Anagrams",
        description: "React + Next.js project that simulates Anagrams, a word game by GamePigeon. Players are given one minute to form words from six random letters. High scores and recent scores are stored in a leaderboard using a Firebase backend.",
        linkIcons: [
            {linkType: "link", url: "https://play-anagrams.vercel.app/"},
            {linkType: "github", url: "https://github.com/johnlockwood307/word-games"}
        ]
    }
];

function Project({img, name, description, linkIcons, useGalleryImages, activeGalleryIndex} : ProjectType) {
    return (<div className="flex flex-col bg-mid gap-y-2 p-2 rounded-xl">
        {useGalleryImages ? <div className="relative h-35 overflow-hidden bg-black">
            {GALLERY_IMAGES.map((img, i) => (
                <div key={i} className={`absolute inset-0 transition-opacity duration-900 ease-in-out ${i === activeGalleryIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                    <Image
                        src={img.src} alt={`Photo from ${img.location}`} priority={i === 0} fill
                        className="object-cover"
                    />
                </div>
        ))}</div> : <div>
            <Image src={img} alt={`Cover image for project \"${name}\"`}/>
        </div>}

        <div className="flex flex-col bg-background p-2 rounded-md gap-y-3">
            <p className="text-foreground font-bold border-b-2 text-lg">
                {name}
            </p>
            <p className="text-foreground text-xs md:text-sm">
                {description}
            </p>
        </div>

        <div className="flex flex-row gap-2 bg-mid p-1 rounded-sm z-30 justify-center mb-1">
            {linkIcons?.map((linkIcon, i) => (
                <ProjectLink linkType={linkIcon.linkType} url={linkIcon.url} key={i}/>
            ))}
        </div>
    </div>);
}

export default function Projects() {
    const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveGalleryIndex(prev => (prev + 1) % GALLERY_IMAGES.length);
        }, CYCLE_DURATION_MS);

        return () => clearInterval(interval);
    }, []);

    return (<div className="flex justify-center w-fit bg-foreground p-2 rounded-xl max-w-[85%] sm:max-w-[70%]">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl justify-items-center text-background">
            {projects.map((project, i) => (
                <li key={i}>
                    <Project img={project.useGalleryImages ? GALLERY_IMAGES[activeGalleryIndex].src : project.img}
                        name={project.name} description={project.description} linkIcons={project.linkIcons}
                        useGalleryImages={project.useGalleryImages} activeGalleryIndex={activeGalleryIndex}/>
                </li>
            ))}
        </ul>
    </div>);
}