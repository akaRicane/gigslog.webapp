import { Head } from '@inertiajs/react'
import PageFooter from '~/components/layouts/PageFooter/PageFooter'
import PageHeader from '~/components/layouts/PageHeader/PageHeader'
import './PageLayout.css'

type PageLayoutProps = {
  children: React.ReactNode
  title?: string
}

const PageLayout: React.FC<PageLayoutProps> = (props) => {
  return (
    <>
      <Head title={props.title} />
      <div className="page-layout">
        <PageHeader />
        <div className="page-content">{props.children}</div>
        <PageFooter />
      </div>
    </>
  )
}

export default PageLayout
