import Timeline from "./Timeline";

const positions = [
    {
        title: "Full Stack Developer",
        subheading: "Work on a team to build full stack web applications pro bono",
        aboutIcon: "stack",
        company: "Full Stack at Brown",
        time: "September 2025 - Present",
        info: [
            "Each semester, build a website pro bono for another student organization or local nonprofit",
            "Collaborate with a team of developers, designers, and a product manager",
            "Receive feedback from clients and improve website to meet clients' needs",
            "Develop frontend and backend (such as content management systems) from scratch"
        ]
    },
    {
        title: "Undergraduate Teaching Assistant",
        subheading: "Two semesters as a Teaching Assistant for CSCI 0410/1411: Foundations of AI and Machine Learning",
        aboutIcon: "school",
        company: "Brown University Department of Computer Science",
        time: "August 2025 - Present",
        info: [
            "Provide conceptual help and debugging help to students in office hours",
            "Develop and maintain course website, keeping assignments and resources up to date",
            "Grade assignments and provide feedback covering a broad range of AI topics, including search, satisfiability, constrained optimization, regression, neural networks, and reinforcement learning",
            "Lead discussion section to review homework and socially responsible computing topics, such as AI policy, bias in training data, and automated decision making"
        ]
    },
    {
        title: "Research Assistant",
        subheading: "Received Undergraduate Teaching and Research Award (UTRA) to work on the project \"Measuring the Dark Matter in the Northern Sky\"",
        aboutIcon: "telescope",
        company: "Brown University Department of Physics",
        time: "May 2024 - July 2024",
        info: [
            "Wrote new scripts and modified existing scripts to process data from the Subaru Telescope and Canada-France-Hawaii Telescope",
            "Calibrated raw data for multiple bands of light and measured the dark matter distribution in galaxy clusters",
            "Worked with Bash, SQLite, Python, and Slurm job scheduling on Oscar, a high performance computing cluster"
        ]
    }
]

export default function Experience() {
    return (<Timeline positions={positions}/>);
}