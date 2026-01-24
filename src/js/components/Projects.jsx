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
      role: t('projects.pandaloyalty.role'),
      summary: t('projects.pandaloyalty.summary'),
      problem: t('projects.pandaloyalty.problem'),
      challenge: t('projects.pandaloyalty.challenge'),
      solution: t('projects.pandaloyalty.solution'),
      outcome: t('projects.pandaloyalty.outcome'),
      demoUrl: t('projects.pandaloyalty.demoUrl'),
      repoUrl: t('projects.pandaloyalty.repoUrl'),
      linksNote: t('projects.pandaloyalty.linksNote'),
      technologies: ['NodeJS', 'C# (.NET Core 3.1)', 'MySQL', 'Docker', 'Zalo API', 'KiotViet API', 'QR Code Scanner', 'MVC', 'Swagger'],
    },
    {
      id: 2,
      title: t('projects.plant.title'),
      period: t('projects.plant.period'),
      teamSize: 5,
      role: t('projects.plant.role'),
      summary: t('projects.plant.summary'),
      problem: t('projects.plant.problem'),
      challenge: t('projects.plant.challenge'),
      solution: t('projects.plant.solution'),
      outcome: t('projects.plant.outcome'),
      demoUrl: t('projects.plant.demoUrl'),
      repoUrl: t('projects.plant.repoUrl'),
      linksNote: t('projects.plant.linksNote'),
      technologies: ['NestJS', 'Angular', 'C#', 'Tailwind', 'Postman', 'REST API', 'Zalo API']
    },
    {
      id: 3,
      title: t('projects.sale.title'),
      period: t('projects.sale.period'),
      teamSize: 4,
      role: t('projects.sale.role'),
      summary: t('projects.sale.summary'),
      problem: t('projects.sale.problem'),
      challenge: t('projects.sale.challenge'),
      solution: t('projects.sale.solution'),
      outcome: t('projects.sale.outcome'),
      demoUrl: t('projects.sale.demoUrl'),
      repoUrl: t('projects.sale.repoUrl'),
      linksNote: t('projects.sale.linksNote'),
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
                    {project.role && <span className="project-role">{t('projects.labels.role')}: {project.role}</span>}
                  </div>
                )}
                <p className="project-description">{project.summary}</p>
                {project.problem && (
                  <div className="project-problem">
                    <strong>{t('projects.labels.problem')}:</strong> {project.problem}
                  </div>
                )}
                {project.challenge && (
                  <div className="project-challenge">
                    <strong>{t('projects.labels.challenge')}:</strong> {project.challenge}
                  </div>
                )}
                {project.solution && (
                  <div className="project-solution">
                    <strong>{t('projects.labels.solution')}:</strong> {project.solution}
                  </div>
                )}
                {project.outcome && (
                  <div className="project-outcome">
                    <strong>{t('projects.labels.outcome')}:</strong> {project.outcome}
                  </div>
                )}
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {(project.demoUrl || project.repoUrl) && (
                  <div className="project-links">
                    <span className="project-links-label">{t('projects.labels.links')}:</span>
                    {project.demoUrl && (
                      <a className="project-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        {t('projects.labels.demo')}
                      </a>
                    )}
                    {project.repoUrl && (
                      <a className="project-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        {t('projects.labels.repo')}
                      </a>
                    )}
                  </div>
                )}
                {!project.demoUrl && !project.repoUrl && project.linksNote && (
                  <div className="project-links-note">{project.linksNote}</div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
