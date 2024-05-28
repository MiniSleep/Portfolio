import styles from './Projects.Styles.module.css'
import ProjectCard from '../../common/ProjectCard'
import LittleLemon from '../../assets/littleLemon.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={LittleLemon} 
            link="https://github.com/MiniSleep/Little-Lemon-Booking"
            h3="Little Lemon"
            p =" Restaurant Booking App"
            />
        </div>
    </section>
  )
}

export default Projects