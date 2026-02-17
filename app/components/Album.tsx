import Image from "next/image";
import Link from "next/link";
import fallbackImage from "@/public/album_img_fallback.png";

const IMG_SIZE = 200;

interface AlbumProps {
    name: string,
    artist?: string,
    href?: string,
    imgUrl?: string
}

// need img url, album name, artist(s), href to album
export default function Album(props: AlbumProps) {
    const altText = `\"${props.name}\"${props.artist ? ` by ${props.artist}` : ""}`;
    const safeHref = props.href ? props.href : "";

    return (<div className="bg-midground p-2 rounded-lg">
        <a href={safeHref} target="_blank" rel="noopener noreferrer">
            <Image
                src={props.imgUrl ? props.imgUrl : fallbackImage}
                alt={altText}
                width={IMG_SIZE}
                height={IMG_SIZE}
                loading="eager"
                className="transition-all hover:scale-102"
            />
        </a>
    </div>);
}