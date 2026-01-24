import { useLanguage } from '../shared/useLanguage'
import SectionTitle from '../shared/SectionTitle'
import Card from '../shared/Card'
import { motion } from 'framer-motion'
import '../../styles/components/About.scss'

const About = () => {
  const { t } = useLanguage()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle>{t('about.title')}</SectionTitle>
        <motion.div className="about-content" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.div className="about-text" variants={itemVariants}>
            <motion.p variants={itemVariants}>{t('about.description1')}</motion.p>
            {t('about.description2') && <motion.p variants={itemVariants}>{t('about.description2')}</motion.p>}
            {t('about.description3') && <motion.p variants={itemVariants}>{t('about.description3')}</motion.p>}
            {t('about.description4') && <motion.p variants={itemVariants}>{t('about.description4')}</motion.p>}
            {t('about.description5') && <motion.p variants={itemVariants}>{t('about.description5')}</motion.p>}
            <motion.div className="about-stats" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Card className="stat-item">
                  <h3>15+</h3>
                  <p>{t('about.stats.clients')}</p>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Card className="stat-item">
                  <h3>3+</h3>
                  <p>{t('about.stats.experience')}</p>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Card className="stat-item">
                  <h3>20+</h3>
                  <p>{t('about.stats.technologies')}</p>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

