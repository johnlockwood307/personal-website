import Header from "./Header";

const skills = [
    "Python",
    "Java",
    "C/C++",
    "JavaScript/TypeScript",
    "HTML/CSS",
    "React",
    "Next.js",
    "Tailwind",
    "Bash",
    "Frontend/Backend web development",
    "SQLite",
    "NumPy",
    "Firebase",
    "REST APIs"
];

export default function About() {
    return (<div className="flex flex-col items-center justify-center gap-y-4">
        <Header text="About Me" large/>
        <div className="max-w-[75%] md:max-w-[50%] text-center">
            <p>I'm a junior studying Applied Math-Computer Science at Brown. My interests include machine learning, computer graphics, cryptography, and full-stack development. Currently, I'm open to internship opportunities in the software engineering space.</p>
        </div>
        <Header text="Skills"/>
        <div className="flex flex-col items-center justify-center max-w-[75%] md:max-w-[50%]">
            <ul className="flex flex-wrap gap-x-8 overflow-x-visible justify-center list-disc list-inside">
                {skills.map((skill, i) => (
                    <li key={i}>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    </div>);
}