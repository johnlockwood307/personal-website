const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!.trim();
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!.trim();
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN!.trim();    

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=50';

interface SpotifyTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: string;
    scope: string;
};

const getAccessToken = async (): Promise<SpotifyTokenResponse> => {
    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', REFRESH_TOKEN);

    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
    });

    const data = await response.json();

    if (!response.ok) {
        console.error('token refresh error: ', data);
        throw new Error(`failed to refresh token: ${data.error}`);
    }

    return data;
};


export const getRecentlyPlayed = async () => {
    const { access_token } = await getAccessToken();

    return fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
};
