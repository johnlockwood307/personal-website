export type Position = {
    title?: string,
    school?: string,
    company?: string,
    degree?: string
    time: string,
    info?: string[]
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
    return (<div className="pt-5 max-w-[75%] justify-center">
        <ol className="flex flex-col relative border-s gap-y-10 mb-8">
            {positions.map((position, i) => (
                <li key={i} className="flex flex-col gap-y-2">
                    <TimelineDot/>
                    <p className="ms-5 text-sm">{position.time}</p>
                    
                    {position.title && <p className="ms-5 text-2xl font-bold">{position.title}</p>}
                    {position.school && <p className="ms-5 text-2xl font-bold">{position.school}</p>}
                    
                    {position.company && <p className="ms-5 text-xl">{position.company}</p>}
                    {position.degree && <p className="ms-5 text-xl">{position.degree}</p>}
                    
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