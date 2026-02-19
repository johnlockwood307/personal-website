import { getRecentlyPlayed } from "@/app/lib/spotify";
import { Track } from "@/app/lib/track";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET() {
    const response = await getRecentlyPlayed();

    // block direct browser access to this endpoint
    const headersList = await headers();
    const fetchSite = headersList.get("sec-fetch-site");
    if (fetchSite !== "same-origin" && process.env.NODE_ENV === "production") {
        return new NextResponse(JSON.stringify(
            {error: "direct access not allowed"},
        ), {
            status: 403
        });
    } else {
        console.log("fetchSite: ", fetchSite);
        console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
    }

    // error fetching from API
    if (response.status > 400) {
        const errorBody = await response.json();
        console.error("spotify API error: ", errorBody);
        return NextResponse.json({
            error: "spotify API returned an error",
            tracks: []
        }, {
            status: response.status
        });
    }

    // empty content in the response
    if (response.status === 204) {
        return NextResponse.json({ tracks: [] });
    }

    const result = await response.json();

    if (!result || !Array.isArray(result.items)) {
        console.error("unexpected spotify response: ", result);
        return NextResponse.json({
            error: "invalid response format",
            tracks: []
        }, {
            status: 500
        });
    }

    const tracks : Track[] = result.items.map((song: any) => ({
        title: song.track.name,
        artist: song.track.artists.map((_artist: any) => _artist.name).join(", "),
        albumName: song.track.album.name,
        albumHref: song.track.album.external_urls.spotify,
        albumImgUrl: song.track.album.images[0].url,
        songUrl: song.track.external_urls.spotify,
        songID: song.track.id,
        playedAt: song.played_at,
        duration_ms: song.track.duration_ms
    }));

    return NextResponse.json(
        { tracks },
        {
            headers: {
                "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30"
            }
        }
    );
}
