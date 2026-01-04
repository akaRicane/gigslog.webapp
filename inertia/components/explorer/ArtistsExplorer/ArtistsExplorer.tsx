import React from 'react'
import { apiEndpoint } from '~/app/navigation'
import DisplayArtistInfos from '~/components/display/DisplayArtistInfos/DisplayArtistInfos'
import { Artist } from '~/types/api_models'
import './ArtistsExplorer.css'

const ArtistsExplorer: React.FC = () => {
  const [artists, setArtists] = React.useState<Artist[]>([])
  const [filteredArtists, setFilteredArtists] = React.useState<Artist[]>([])
  const [filterValue, setFilterValue] = React.useState<string>('')

  React.useEffect(() => {
    console.log('use effect fetching artists/')
    fetch(apiEndpoint + 'artists', { method: 'GET' })
      .then((res) => res.json())
      .then((data: Artist[]) => {
        setArtists(data)
        setFilteredArtists(data) // Initialize filtered artists
      })
  }, [])

  React.useEffect(() => {
    if (!filterValue.trim()) {
      setFilteredArtists(artists)
    } else {
      const searchTerm = filterValue.toLowerCase().trim()
      const remaining: Artist[] = artists.filter((artist: Artist) => {
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
  }, [filterValue, artists]) // Add artists to dependencies

  return (
    <div className="artists-explorer-container">
      <p>Artists explorer</p>
      <input
        placeholder="Filter by name or year"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <div className="artists-explorer-grid">
        {filteredArtists.map((artist: Artist) => (
          <div key={artist.id}>
            <DisplayArtistInfos artist={artist} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArtistsExplorer
