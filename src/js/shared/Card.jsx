import '../../styles/shared/Card.scss'

const Card = ({ 
  children, 
  className = '',
  hover = true,
  ...props 
}) => {
  const classes = `card ${hover ? 'card-hover' : ''} ${className}`.trim()

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card

