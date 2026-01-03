import '../../styles/shared/Button.scss'

const Button = ({ 
  children, 
  variant = 'primary', 
  type = 'button',
  onClick,
  href,
  className = '',
  ...props 
}) => {
  const baseClass = 'btn'
  const variantClass = `btn-${variant}`
  const classes = `${baseClass} ${variantClass} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

