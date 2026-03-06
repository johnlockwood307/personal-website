import { FaMapMarkerAlt } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

export type Position = {
    title?: string,
    school?: string,
    company?: string,
    location?: string,
    subheading?: string,
    degree?: string
    time: string,
    info?: string[],
    includeCoursework?: boolean
};

function TimelineDot() {
    return (<div
        className="absolute w-3 h-3 bg-foreground rounded-full mt-1.5 -start-1.5 border border-buffer">
    </div>);
}

interface TimelineProps {
    positions: Position[]
}

export default function Timeline({positions} : TimelineProps) {
    return (<div className="pt-5 max-w-[75%] md:max-w-[65%] lg:max-w-[55%] justify-center">
        <ol className="flex flex-col relative border-s gap-y-12 mb-8">
            {positions.map((position, i) => (
                <li key={i} className="flex flex-col gap-y-1.5">
                    <TimelineDot/>
                    <p className="ms-5 text-sm">{position.time}</p>
                    
                    {position.title && <p className="ms-5 text-2xl font-bold">{position.title}</p>}
                    {position.school && <p className="ms-5 text-2xl font-bold">{position.school}</p>}

                    {position.location && <div className="flex flex-row ms-5 items-center font-bold gap-1">
                        <FaMapMarkerAlt className="text-mid shrink-0"/>
                        <p className="text-xl">{position.location}</p>
                    </div>}
                    {position.subheading && <div className="flex flex-row ms-5 font-bold gap-1">
                        <IoInformationCircleOutline className="text-mid text-xl shrink-0"/>
                        <p className="text-sm self-center">{position.subheading}</p>
                    </div>}
                    
                    {position.company && <p className="ms-5 text-xl font-bold">{position.company}</p>}
                    {position.degree && <p className="ms-5 text-xl font-bold">{position.degree}</p>}

                    {position.includeCoursework && <p className="ms-5 text-md">Coursework includes:</p>}
                    
                    <ol className="list-disc list-inside">
                        {position.info?.map((info, i) => (
                            <li key={i} className="text-sm ms-5">
                                {info}
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    </div>);
}