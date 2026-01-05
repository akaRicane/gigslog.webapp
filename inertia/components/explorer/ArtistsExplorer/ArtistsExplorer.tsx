import { ArtistModel } from '#common/types/models_api'
import React from 'react'
import DisplayArtistInfos from '~/components/display/DisplayArtistInfos/DisplayArtistInfos'
import './ArtistsExplorer.css'

type ArtistsExplorerProps = {
  artists: ArtistModel[]
}

const ArtistsExplorer: React.FC<ArtistsExplorerProps> = (props) => {
  const [filteredArtists, setFilteredArtists] = React.useState<ArtistModel[]>([])
  const [filterValue, setFilterValue] = React.useState<string>('')

  React.useEffect(() => {
    if (!filterValue.trim()) {
      setFilteredArtists(props.artists)
    } else {
      const searchTerm = filterValue.toLowerCase().trim()
      const remaining: ArtistModel[] = props.artists.filter((artist: ArtistModel) => {
        // Check if fullName includes the search term
        const matchesName = artist.fullName.toLowerCase().includes(searchTerm)

        // Check if bornYear matches
        const matchesBornYear = artist.bornYear?.toString().includes(searchTerm)

        // Check if formedYear matches
        const matchesFormedYear = artist.formedYear?.toString().includes(searchTerm)

        return matchesName || matchesBornYear || matchesFormedYear
      })
      setFilteredArtists(remaining)
    }
  }, [filterValue, props.artists]) // Add artists to dependencies

  return (
    <div className="artists-explorer-container">
      <p>Artists explorer</p>
      <input
        placeholder="Filter by name or year"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <div className="artists-explorer-grid">
        {filteredArtists.map((artist: ArtistModel) => (
          <div key={artist.id}>
            <DisplayArtistInfos artist={artist} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArtistsExplorer
