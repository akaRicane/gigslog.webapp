import { Link } from '@inertiajs/react'
import './PageHeader.css'

type PageHeaderProps = {}

const PageHeader: React.FC<PageHeaderProps> = () => {
  return (
    <div className="page-header">
      <Link href={'/'} target="_blank" className="page-header-link">
        home
      </Link>
      <Link href={'/explore'} target="_blank" className="page-header-link">
        explore
      </Link>
      <Link href={'/account'} target="_blank" className="page-header-link">
        my account
      </Link>
    </div>
  )
}

export default PageHeader
