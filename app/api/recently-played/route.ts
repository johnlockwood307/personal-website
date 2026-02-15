import { getRecentlyPlayed } from '../../lib/spotify';
import { NextResponse } from 'next/server';

export interface Track {
    title: string;
    artist: string;
    album: string;
    albumImageUrl: string;
    songUrl: string;
    playedAt: string;
}

export async function GET() {
    const response = await getRecentlyPlayed();

    // error fetching from API
    if (response.status > 400) {
        const errorBody = await response.json();
        console.error('spotify API error: ', errorBody);
        return NextResponse.json({
            error: 'spotify API returned an error',
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
        console.error('unexpected spotify response: ', result);
        return NextResponse.json({
            error: 'invalid response format',
            tracks: []
        }, {
            status: 500
        });
    }

    const tracks : Track[] = result.items.map((song: any) => ({
        title: song.track.name,
        artist: song.track.artists.map((_artist: any) => _artist.name).join(', '),
        album: song.track.album.name,
        albumImgUrl: song.track.album.images[0].url,
        songUrl: song.track.external_urls.spotify,
        playedAt: song.played_at
    }));

    return NextResponse.json(
        { tracks },
        {
            headers: {
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30'
            }
        }
    );
}
