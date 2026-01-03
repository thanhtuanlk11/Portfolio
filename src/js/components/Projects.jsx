import { useLanguage } from '../shared/useLanguage'
import SectionTitle from '../shared/SectionTitle'
import Card from '../shared/Card'
import '../../styles/components/Projects.scss'

const Projects = () => {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      title: t('projects.pandaloyalty.title'),
      period: t('projects.pandaloyalty.period'),
      teamSize: 5,
      role: t('projects.role'),
      description: t('projects.pandaloyalty.description'),
      technologies: ['NodeJS', 'C# (.NET Core 3.1)', 'MySQL', 'Docker', 'Zalo API', 'KiotViet API', 'QR Code Scanner', 'MVC', 'Swagger'],
      achievement: t('projects.pandaloyalty.achievement')
    },
    {
      id: 2,
      title: t('projects.plant.title'),
      period: t('projects.plant.period'),
      teamSize: 5,
      role: t('projects.role'),
      description: t('projects.plant.description'),
      technologies: ['NestJS', 'Angular', 'C#', 'Tailwind', 'Postman', 'REST API', 'Zalo API']
    },
    {
      id: 3,
      title: t('projects.sale.title'),
      period: t('projects.sale.period'),
      teamSize: 4,
      role: t('projects.role'),
      description: t('projects.sale.description'),
      technologies: ['ReactJS', 'Postman', 'Docker', 'Zalo API', 'VNPay API']
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionTitle>{t('projects.title')}</SectionTitle>
        <div className="projects-grid">
          {projects.map(project => (
            <Card key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.period && (
                  <div className="project-meta">
                    <span className="project-period">{project.period}</span>
                    {project.teamSize && <span className="project-team">{t('projects.team')}: {project.teamSize}</span>}
                    {project.role && <span className="project-role">{project.role}</span>}
                  </div>
                )}
                <p className="project-description">{project.description}</p>
                {project.achievement && (
                  <div className="project-achievement">
                    <strong>{t('projects.achievement')}:</strong> {project.achievement}
                  </div>
                )}
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
