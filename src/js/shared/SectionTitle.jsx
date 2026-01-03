import '../../styles/shared/SectionTitle.scss'

const SectionTitle = ({ children, className = '' }) => {
  return (
    <h2 className={`section-title ${className}`.trim()}>
      {children}
    </h2>
  )
}

export default SectionTitle

