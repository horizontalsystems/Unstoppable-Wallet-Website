import cn from 'classnames'

function CardLearn({ title, description, isGuide, src, link, withMargin }) {
  const style = {}

  if (!isGuide) {
    style.height = 230
  }

  const classNames = {
    'justify-content-center': isGuide,
    'justify-content-end': !isGuide,
    'card-body p-4 m-md-2': withMargin
  }

  return (
    <div className="card card-regular border-0 rounded-24 bg-steel-10 overflow-hidden">
      <div className="card-body p-4 m-md-2">
        <div className="small text-grey lh-sm">{isGuide ? 'Guide' : 'Course'}</div>
        <div className="fs-4 fw-normal text-steel-light mb-2">{title}</div>
        <div className="small text-grey lh-sm">{description}</div>
      </div>
      <div className={cn('d-flex', classNames)}>
        <img
          className={cn({ 'w-100': isGuide })}
          style={style}
          src={src}
          alt=""
        />
      </div>
    </div>
  )
}

export default CardLearn
