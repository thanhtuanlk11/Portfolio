import { useLanguage } from '../shared/useLanguage'
import SectionTitle from '../shared/SectionTitle'
import { motion } from 'framer-motion'
import { 
  SiJavascript, 
  SiNodedotjs, 
  SiReact, 
  SiAngular, 
  SiDotnet,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGraphql,
  SiSass,
  SiTailwindcss,
  SiPostman,
  SiSwagger
} from 'react-icons/si'
import { 
  FaCode,
  FaDatabase,
  FaServer,
  FaCloud
} from 'react-icons/fa'
import '../../styles/components/Skills.scss'

const Skills = () => {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t('skills.categories.programming'),
      icon: '💻',
      skills: [
        { name: 'C#', icon: FaCode, color: '#239120' },
        { name: 'NodeJS', icon: SiNodedotjs, color: '#339933' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'jQuery', icon: SiJavascript, color: '#0769AD' },
      ]
    },
    {
      title: t('skills.categories.frameworks'),
      icon: '⚛️',
      skills: [
        { name: 'ReactJS', icon: SiReact, color: '#61DAFB' },
        { name: 'Angular', icon: SiAngular, color: '#DD0031' },
        { name: '.NET Core', icon: SiDotnet, color: '#512BD4' },
        { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
        { name: 'Entity Framework', icon: SiDotnet, color: '#512BD4' },
        { name: 'RESTful API', icon: SiPostman, color: '#FF6C37' },
      ]
    },
    {
      title: t('skills.categories.database'),
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'SQL Server', icon: FaDatabase, color: '#CC2927' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      ]
    },
    {
      title: t('skills.categories.other'),
      icon: '🛠️',
      skills: [
        { name: 'SCSS', icon: SiSass, color: '#CC6699' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Zalo Miniapp', icon: FaCode, color: '#0068FF' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Swagger', icon: SiSwagger, color: '#85EA2D' },
        { name: 'VPS', icon: FaServer, color: '#2496ED' },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const skillCardVariants = {
    rest: { scale: 1, rotateY: 0 },
    hover: { 
      scale: 1.05, 
      rotateY: 5,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionTitle>{t('skills.title')}</SectionTitle>
        <motion.div 
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="skill-category-wrapper"
            >
              <div className="skill-category">
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon
                    return (
                      <motion.div
                        key={skillIndex}
                        variants={skillCardVariants}
                        initial="rest"
                        whileHover="hover"
                        className="skill-card"
                      >
                        <div className="skill-icon-wrapper">
                          <IconComponent className="skill-icon" style={{ color: skill.color }} />
                        </div>
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-glow" style={{ '--skill-color': skill.color }}></div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
