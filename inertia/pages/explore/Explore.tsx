import { ContentCollections } from '#common/enums/content'
import NavigationsController from '#controllers/navigations_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import React, { Activity } from 'react'
import ArtistsExplorer from '~/components/explorer/ArtistsExplorer/ArtistsExplorer'
import VenuesExplorer from '~/components/explorer/VenuesExplorer'
import PageLayout from '~/components/layouts/PageLayout/PageLayout'
import './Explore.css'

const Explore: React.FC<InferPageProps<NavigationsController, 'explore'>> = (props) => {
  const [selectedCollection, setSelectedCollection] = React.useState<ContentCollections>(
    ContentCollections.ARTISTS
  )

  React.useEffect(() => {}, [])

  return (
    <PageLayout title="explore">
      <div className="explore-container">
        <div className="lateral-container">
          <button
            onClick={() => setSelectedCollection(ContentCollections.ARTISTS)}
            className="lateral-menu-button"
          >
            Artists
          </button>
          <button
            onClick={() => setSelectedCollection(ContentCollections.VENUES)}
            className="lateral-menu-button"
          >
            Venues
          </button>
        </div>
        <div className="content-container">
          <Activity mode={selectedCollection === ContentCollections.ARTISTS ? 'visible' : 'hidden'}>
            <ArtistsExplorer artists={props.artists.ok ? props.artists.data : []} />
          </Activity>
          <Activity mode={selectedCollection === ContentCollections.VENUES ? 'visible' : 'hidden'}>
            <VenuesExplorer venues={props.venues.ok ? props.venues.data : []} />
          </Activity>
        </div>
      </div>
    </PageLayout>
  )
}

export default Explore
