"use client"
import { useState } from "react";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import RecentlyPlayed from "./components/RecentlyPlayed";

export default function Home() {
    return (<div className="flex flex-col gap-y-25 pb-10">
        {/* Navbar */}

        <section id="top">
            <Gallery/>
        </section>

        <section id="about">
            <About/>
        </section>

        <section id="experience">
            <Header text="Experience" large/>
            <Experience/>
        </section>

        <section id="education">
            <Header text="Education" large/>
            <Education/>
        </section>

        {/* Projects */}
        <section id="projects">
            <Header text="Projects" large/>
            <Projects/>
        </section>

        <section id="albums">
            <Header text="Albums I've been listening to recently"/>
            <RecentlyPlayed/>
        </section>
    </div>);
}
