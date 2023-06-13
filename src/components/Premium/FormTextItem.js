import cn from 'classnames'

export function FormTextItem({ className, title, value, yellow }) {
  return (
    <div className={cn('row', className)}>
      <div className="col-sm-6 col-form-label text-grey">{title}</div>
      <div className="col-sm-6">
        <div className={cn('Pay-fieldset-right', { 'color-yellow': yellow })}>{value}</div>
      </div>
    </div>
  )
}
