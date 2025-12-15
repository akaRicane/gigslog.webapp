import React from 'react'
import { apiEndpoint } from '~/app/app'
import { Venue } from '~/types/api_models'

const VenuesExplorer: React.FC = () => {
  const [venues, setVenues] = React.useState<Venue[]>([])

  React.useEffect(() => {
    console.log('use effect fetching venues/')
    fetch(apiEndpoint + 'venues', { method: 'GET' })
      .then((res) => res.json())
      .then((data: Venue[]) => setVenues(data))
  }, [])

  return (
    <div>
      <label>Venues explorer</label>
      <ul>
        {venues.map((venue: Venue) => {
          return (
            <li key={venue.id}>
              {venue.fullName} ({venue.country})
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default VenuesExplorer
