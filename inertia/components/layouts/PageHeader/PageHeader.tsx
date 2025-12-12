import './PageHeader.css'

type PageHeaderProps = {}

const PageHeader: React.FC<PageHeaderProps> = () => {
  return (
    <div className='page-header'>
      <p>home</p>
      <p>my account</p>
    </div>
  )
}

export default PageHeader
