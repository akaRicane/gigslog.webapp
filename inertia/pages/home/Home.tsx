import { Link } from '@inertiajs/react'
import React from 'react'
import PageLayout from '~/components/layouts/PageLayout/PageLayout'
import './Home.css'

const Home: React.FC = () => {
  return (
    <PageLayout title="Gigslog">
      <div className="home-container">
        <p>Welcome in your concert tracker</p>
        <Link href={'/explore'} target="_blank" className="page-header-link">
          Start by exploring artists, venues and so much more !
        </Link>
      </div>
    </PageLayout>
  )
}

export default Home
