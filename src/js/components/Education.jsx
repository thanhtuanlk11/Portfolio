import { useLanguage } from '../shared/useLanguage'
import SectionTitle from '../shared/SectionTitle'
import Card from '../shared/Card'
import { 
  SiJavascript, 
  SiPostgresql
} from 'react-icons/si'
import { 
  FaCode,
  FaDatabase
} from 'react-icons/fa'
import '../../styles/components/Education.scss'

const Education = () => {
  const { t } = useLanguage()

  const educations = [
    { 
      degree: t('education.degree'),
      school: t('education.school'),
      period: '2019 – 2023',
      description: t('education.description')
    }
  ]

  const certifications = [
    {
      title: 'Foundational C# with Microsoft',
      issuer: 'FreeCodeCamp',
      id: 'fcc7795fa04-35de-4713-867a-2e93f435a6b7-fcswm',
      icon: FaCode,
      color: '#239120'
    },
    {
      title: 'Rest API',
      issuer: 'HackerRank',
      id: 'f9551c26cca3',
      icon: FaCode,
      color: '#FF6C37'
    },
    {
      title: 'JavaScript',
      issuer: 'HackerRank',
      id: '3ea42ccb599b',
      icon: SiJavascript,
      color: '#F7DF1E'
    },
    {
      title: 'SQL (Basic) Certificate',
      issuer: 'HackerRank',
      id: 'bbae284bbe4b',
      icon: SiPostgresql,
      color: '#336791'
    },
    {
      title: 'Certified SPA Supervisor',
      issuer: 'CSS',
      id: 'bbb6cf528',
      icon: FaDatabase,
      color: '#4ade80'
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <SectionTitle>{t('education.title')}</SectionTitle>
        <div className="education-content">
          {educations.map((edu, index) => (
            <Card key={index} className="education-card">
              <div className="education-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
              </div>
              <div className="education-info">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-school">{edu.school}</h4>
                <span className="education-period">{edu.period}</span>
                <p className="education-description">{edu.description}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="certifications-section">
          <h3 className="certifications-title">{t('education.certifications')}</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <Card key={index} className="certification-card">
                  <div className="certification-icon-wrapper">
                    <IconComponent 
                      className="certification-icon" 
                      style={{ color: cert.color }}
                    />
                  </div>
                  <div className="certification-info">
                    <h4 className="certification-title">{cert.title}</h4>
                    <p className="certification-issuer">{cert.issuer}</p>
                    <span className="certification-id">ID: {cert.id}</span>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
