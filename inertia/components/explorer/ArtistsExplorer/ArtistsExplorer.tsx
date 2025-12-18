import React from 'react'
import { apiEndpoint } from '~/app/app'
import DisplayArtistInfos from '~/components/display/DisplayArtistInfos/DisplayArtistInfos'
import { Artist } from '~/types/api_models'
import './ArtistsExplorer.css'

const ArtistsExplorer: React.FC = () => {
  const [artists, setArtists] = React.useState<Artist[]>([])

  React.useEffect(() => {
    console.log('use effect fetching artists/')
    fetch(apiEndpoint + 'artists', { method: 'GET' })
      .then((res) => res.json())
      .then((data: Artist[]) => setArtists(data))
  }, [])

  return (
    <div className="artists-explorer-container">
      <label>Artists explorer</label>
      <div className="artists-explorer-grid">
        {artists.map((artist: Artist) => {
          return <DisplayArtistInfos artist={artist} />
        })}
      </div>
    </div>
  )
}

export default ArtistsExplorer
