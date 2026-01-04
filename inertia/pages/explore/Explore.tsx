import NavigationsController from '#controllers/navigations_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import React, { Activity } from 'react'
import ArtistsExplorer from '~/components/explorer/ArtistsExplorer/ArtistsExplorer'
import VenuesExplorer from '~/components/explorer/VenuesExplorer'
import PageLayout from '~/components/layouts/PageLayout/PageLayout'
import './Explore.css'

enum ContentCategories {
  ARTISTS = 'artists',
  VENUES = 'venues',
}

const Explore: React.FC<InferPageProps<NavigationsController, 'explore'>> = () => {
  const [selectedView, setSelectedView] = React.useState<ContentCategories>(
    ContentCategories.ARTISTS
  )

  return (
    <PageLayout title="explore">
      <div className="explore-container">
        <div className="lateral-container">
          <button
            onClick={() => setSelectedView(ContentCategories.ARTISTS)}
            className="lateral-menu-button"
          >
            Artists
          </button>
          <button
            onClick={() => setSelectedView(ContentCategories.VENUES)}
            className="lateral-menu-button"
          >
            Venues
          </button>
        </div>
        <div className="content-container">
          <Activity mode={selectedView === ContentCategories.ARTISTS ? 'visible' : 'hidden'}>
            <ArtistsExplorer />
          </Activity>
          <Activity mode={selectedView === ContentCategories.VENUES ? 'visible' : 'hidden'}>
            <VenuesExplorer />
          </Activity>
        </div>
      </div>
    </PageLayout>
  )
}

export default Explore
