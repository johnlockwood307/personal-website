import Timeline from "./Timeline";

const positions = [
    {
        school: "Brown University",
        degree: "Sc.B. Applied Mathematics-Computer Science",
        time: "August 2023 - May 2027",
        includeCoursework: true,
        info: [
            "Machine Learning",
            "Computer Graphics",
            "Applied Cryptography",
            "Computer Systems",
            "Numerical Optimization",
            "Abstract Algebra",
            "Applied ODEs / PDEs",
            "Probabilistic Models"
        ]
    },
    {
        school: "Delaware Valley High School",
        time: "August 2019 - June 2023",
        info: [
            "Valedictorian",
            "Eagle Scout"
        ]
    }
]

export default function Education() {
    return (<Timeline positions={positions}/>);
}