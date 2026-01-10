import NavigationsController from '#controllers/navigations_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import { Link } from '@inertiajs/react'
import React from 'react'
import PageLayout from '~/components/layouts/PageLayout/PageLayout'
import './Home.css'
import { NavigationRoutes } from '#common/enums/api_routes'

const Home: React.FC<InferPageProps<NavigationsController, 'home'>> = () => {
  return (
    <PageLayout title="Gigslog">
      <div className="home-container">
        <p>Welcome in your concert tracker</p>
        <Link href={NavigationRoutes.EXPLORE} target="_blank" className="page-header-link">
          Start by exploring artists, venues and so much more !
        </Link>
      </div>
    </PageLayout>
  )
}

export default Home
