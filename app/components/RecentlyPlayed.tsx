"use client"
import { useEffect, useState } from "react";
import { Track } from "@/app/lib/track";
import Album from "./Album";
import { NUM_DISPLAY_ALBUMS } from "./constants";

/**
 * msListened: total number of ms listened to among songs from this album,
 *    considering the 50 most recently listened songs
 * track: Track object for one of the songs in the album
 */
type AlbumInfo = {
    msListened: number,
    track: Track
}

export default function RecentlyPlayed() {
    const [loading, setLoading] = useState<boolean>(true);
    const [success, setSuccess] = useState<boolean>(false);
    const [albumNames, setAlbumNames] = useState<string[]>([]);
    const [albumDict, setAlbumDict] = useState<Map<string, AlbumInfo>>(new Map());
    
    /*
     * For each album name of songs in the 50 most recently listened,
     *    populate albumDict with total ms listened and one Track from that album.
     * Populate albumNames by sorting all albums in albumDict by decreasing listen time.
     **/
    useEffect(() => {
        async function getTracks() {
            const res = await fetch("/api/recently-played", {
                method: "GET"
            });

            if (!res.ok) {
                setLoading(false);
            }

            const resJSON = await res.json();
            const tracks: Track[] = resJSON.tracks;

            // map from album name to (album img url, track id of a song on that album)
            const albumDict = new Map();

            tracks.forEach((track) => {
                if (!albumDict.has(track.albumName)) {
                    const albumInfo: AlbumInfo = {
                        msListened: track.duration_ms,
                        track: track
                    };
                    albumDict.set(track.albumName, albumInfo);
                } else {
                    albumDict.get(track.albumName).msListened += track.duration_ms;
                }
            });

            // sort album names by the amount of time listened over the 50 most recently listened songs
            const sortedAlbumNames = [...albumDict.keys()].sort((albumInfo1, albumInfo2) => (
                albumDict.get(albumInfo2).msListened - albumDict.get(albumInfo1).msListened
            ));

            setAlbumDict(albumDict);
            setAlbumNames(sortedAlbumNames);
            setSuccess(true);
            setLoading(false);
        }

        getTracks();
    }, []);
    
    if (loading) {
        return (<div>
            Loading...
        </div>);
    } else {
        if (success) {
            return (<div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-foreground p-2 rounded-xl w-fit">
                {albumNames.slice(0, NUM_DISPLAY_ALBUMS).map((albumName, i) => (
                    <Album key={i}
                        name={albumName}
                        artist={albumDict.get(albumName)?.track.artist}
                        href={albumDict.get(albumName)?.track.albumHref}
                        imgUrl={albumDict.get(albumName)?.track.albumImgUrl}
                    />
                ))}
            </div>);
        } else {
            return (<div>
                Something went wrong.
            </div>);
        }
    }
}
