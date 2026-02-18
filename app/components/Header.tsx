interface HeaderProps {
    text: string
}

export default function Header(props: HeaderProps) {
    return (<div className="border-b-5 px-3 border-taupe">
        <p className="font-bold sm:text-xl md:text-2xl">
            {props.text}
        </p>
    </div>);
}