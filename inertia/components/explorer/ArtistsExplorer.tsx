import React from 'react'
import { apiEndpoint } from '~/app/app'
import { Artist } from '~/types/api_models'

const ArtistsExplorer: React.FC = () => {
  const [artists, setArtists] = React.useState<Artist[]>([])

  React.useEffect(() => {
    console.log('use effect fetching artists/')
    fetch(apiEndpoint + 'artists', { method: 'GET' })
      .then((res) => res.json())
      .then((data: Artist[]) => setArtists(data))
  }, [])

  return (
    <div>
      <label>Artists explorer</label>
      <ul>
        {artists.map((artist: Artist) => {
          return <li key={artist.id}>{artist.fullName}</li>
        })}
      </ul>
    </div>
  )
}

export default ArtistsExplorer
