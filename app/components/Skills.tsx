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

export default function Skills() {
    return (<div className="flex flex-col items-center justify-center gap-y-4">
        <div className="flex flex-col items-center justify-center max-w-[75%] md:max-w-[50%]">
            <ul className="flex flex-wrap gap-x-8 overflow-x-visible justify-center list-disc list-inside">
                {skills.map((skill, i) => (
                    <li key={i}>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    </div>)
}