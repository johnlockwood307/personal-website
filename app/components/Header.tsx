interface HeaderProps {
    text: string,
    large?: boolean
}

export default function Header(props: HeaderProps) {
    return (<div className="border-b-5 px-3 border-mid">
        <p className={`font-bold ${props.large ? "text-4xl md:text-5xl" : "text-xl sm:text-2xl md:text-3xl lg:text-4xl"}`}>
            {props.text}
        </p>
    </div>);
}