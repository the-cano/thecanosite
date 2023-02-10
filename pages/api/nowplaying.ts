import { NextApiRequest, NextApiResponse } from 'next'
import SpotifyWebApi from 'spotify-web-api-node'
import { ENVS } from '@/utils/config';

const api = new SpotifyWebApi({
    clientId: ENVS.SPOTIFY_CLIENT_ID,
    clientSecret: ENVS.SPOTIFY_CLIENT_SECRET,
    redirectUri: ENVS.SPOTIFY_REDIRECT_URI,
});

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
    try {
        api.setRefreshToken(ENVS.SPOTIFY_REFRESH_TOKEN)
        const data = await api.refreshAccessToken()
         api.setAccessToken(data.body['access_token'])

         const recentTracks = await api.getMyRecentlyPlayedTracks({
            limit: 1 })
            res.status(200).json(recentTracks.body.items[0].track)
    }
    catch (err) {
        console.log('Something went wrong!', err)
    }
}

export default handler