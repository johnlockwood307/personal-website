import Timeline from "./Timeline";

const positions = [
    {
        school: "Brown University",
        location: "Providence, RI",
        degree: "Sc.B. Applied Mathematics-Computer Science",
        time: "August 2023 - May 2027",
        includeCoursework: true,
        info: [
            "Machine Learning",
            "Computer Graphics",
            "Computer Vision",
            "Applied Cryptography",
            "Robotics",
            "Computer Systems",
            "Numerical Optimization",
            "Abstract Algebra",
            "Applied Complex Analysis",
            "Applied ODEs / PDEs",
            "Probabilistic Models",
            "Computational Probability"
        ]
    },
    // {
    //     school: "Delaware Valley High School",
    //     location: "Milford, PA",
    //     time: "August 2019 - June 2023",
    //     info: [
    //         "Valedictorian",
    //         "Eagle Scout"
    //     ]
    // }
]

export default function Education() {
    return (<Timeline positions={positions}/>);
}
