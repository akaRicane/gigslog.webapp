import { VenueModel } from '#common/types/models_api'
import React from 'react'

type VenueExplorerProps = {
  venues: VenueModel[]
}

const VenuesExplorer: React.FC<VenueExplorerProps> = (props) => {
  const [venues, _setVenues] = React.useState<VenueModel[]>(props.venues)

  return (
    <div>
      <label>Venues explorer</label>
      <ul>
        {venues.map((venue: VenueModel) => {
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
