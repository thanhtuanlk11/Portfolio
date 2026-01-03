import { useLanguage } from '../shared/useLanguage'
import SectionTitle from '../shared/SectionTitle'
import Card from '../shared/Card'
import '../../styles/components/About.scss'

const About = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle>{t('about.title')}</SectionTitle>
        <div className="about-content">
          <div className="about-text">
            <p>{t('about.description1')}</p>
            <p>{t('about.description2')}</p>
            <p>{t('about.description3')}</p>
            <div className="about-stats">
              <Card className="stat-item">
                <h3>15+</h3>
                <p>{t('about.stats.clients')}</p>
              </Card>
              <Card className="stat-item">
                <h3>3+</h3>
                <p>{t('about.stats.experience')}</p>
              </Card>
              <Card className="stat-item">
                <h3>20+</h3>
                <p>{t('about.stats.technologies')}</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

