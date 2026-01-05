import { NavigationRoutes } from '#common/enums/server_routes'
import { Link } from '@inertiajs/react'
import React from 'react'
import './PageHeader.css'

type PageHeaderProps = {}

const PageHeader: React.FC<PageHeaderProps> = () => {
  return (
    <div className="page-header">
      <Link href={NavigationRoutes.HOME} target="_blank" className="page-header-link">
        home
      </Link>
      <Link href={NavigationRoutes.EXPLORE} target="_blank" className="page-header-link">
        explore
      </Link>
      <Link href={NavigationRoutes.ACCOUNT} target="_blank" className="page-header-link">
        my account
      </Link>
    </div>
  )
}

export default PageHeader
