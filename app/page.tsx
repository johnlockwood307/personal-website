"use client"
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import RecentlyPlayed from "./components/RecentlyPlayed";


export default function Home() {
    return (<div className="flex flex-col gap-y-25 pb-10">
        <section id="top">
            <Gallery/>
        </section>

        <section id="about">
            <Header text="About Me" large/>
            <About/>
        </section>

        <section id="skills">
            <Header text="Skills" large/>
            <Skills/>
        </section>

        <section id="experience">
            <Header text="Experience" large/>
            <Experience/>
        </section>

        <section id="education">
            <Header text="Education" large/>
            <Education/>
        </section>

        <section id="projects">
            <Header text="Projects" large/>
            <Projects/>
        </section>

        <section id="albums">
            <Header text="Albums in rotation"/>
            <RecentlyPlayed/>
        </section>
    </div>);
}
