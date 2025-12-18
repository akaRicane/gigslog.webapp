import React from 'react'
import ArtistsExplorer from '~/components/explorer/ArtistsExplorer/ArtistsExplorer'
import PageLayout from '~/components/layouts/PageLayout/PageLayout'
import './Home.css'
import VenuesExplorer from '~/components/explorer/VenuesExplorer'

enum HomeViews {
  DEFAULT = 'default',
  ARTISTS = 'artists',
  VENUES = 'venues',
}

const Home: React.FC = () => {
  const [selectedView, setSelectedView] = React.useState<HomeViews>(HomeViews.DEFAULT)

  return (
    <PageLayout title="Gigslog">
      <div className="home-container">
        <div className="lateral-container">
          <button
            onClick={() => setSelectedView(HomeViews.DEFAULT)}
            className="lateral-menu-button"
          >
            Home
          </button>
          <button
            onClick={() => setSelectedView(HomeViews.ARTISTS)}
            className="lateral-menu-button"
          >
            Artists
          </button>
          <button onClick={() => setSelectedView(HomeViews.VENUES)} className="lateral-menu-button">
            Venues
          </button>
        </div>
        <div className="content-container">
          {selectedView === HomeViews.DEFAULT && <p>{selectedView}</p>}
          {selectedView === HomeViews.ARTISTS && <ArtistsExplorer />}
          {selectedView === HomeViews.VENUES && <VenuesExplorer />}
        </div>
      </div>
    </PageLayout>
  )
}

export default Home
