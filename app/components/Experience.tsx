import Timeline from "./Timeline";

const positions = [
    {
        title: "Undergraduate Teaching Assistant",
        company: "Brown University Department of Computer Science",
        time: "August 2025 - Present",
        info: [
            "Teaching Assistant for CSCI 0410/1411: Foundations of AI and Machine Learning",
            "Provide conceptual and debugging help to students in office hours",
            "Grade assignments and provide feedback",
            "Lead discussion section to review homework and socially responsible computing topics"
        ]
    },
    {
        title: "Research Assistant",
        company: "Brown University Department of Physics",
        time: "May 2024 - July 2024",
        info: [
            "Received Undergraduate Teaching and Research Award (UTRA) to work on the project \"Measuring the Dark Matter in the Northern Sky\"",
            "Modified existing scripts and wrote new scripts to process telescope data",
            "Measured the dark matter distribution in galaxy clusters",
            "Worked with Bash, SQLite, and Python"
        ]
    }
]

export default function Experience() {
    return (<Timeline positions={positions}/>);
}