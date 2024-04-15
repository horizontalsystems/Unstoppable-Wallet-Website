import cn from 'classnames'

function Page({ black, darkest, children }) {
  return (
    <div className={cn('container-fluid py-8', { 'bg-black': black, 'bg-darkest': darkest })}>
      {children}
    </div>
  )
}

export default Page
