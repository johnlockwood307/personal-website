import Timeline from "./Timeline";

const positions = [
    {
        school: "Brown University",
        degree: "Sc.B. Applied Mathematics-Computer Science",
        time: "August 2023 - May 2027",
        info: []
    },
    {
        school: "Delaware Valley High School",
        time: "August 2019 - June 2023",
        info: []
    }
]

export default function Education() {
    return (<Timeline positions={positions}/>);
}