import styles from './HeroStyles.module.css'
import heroImg from '../../assets/icons8-pokemon-96.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedInIconDark from '../../assets/linkedin-dark.svg'
import linkedInIconLight from '../../assets/linkedin-light.svg'
import gitHubIconDark from '../../assets/github-dark.svg'
import gitHubIconLight from '../../assets/github-light.svg'
import CV from '../../assets/Aaron Tran Resume.docx .pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const  {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const linkedInIcon = theme === 'light' ? linkedInIconLight : linkedInIconDark;
    const gitHubIcon = theme === 'light' ? gitHubIconLight : gitHubIconDark;

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt='Profile picture' />
            <img className={styles.colorMode} src={themeIcon} alt='Color mode icon' onClick={toggleTheme}/>
        </div>

        <div className={styles.info}>
            <h1>
                Aaron
                <br/>
                Tran
            </h1>
            <h2>Frontend developer</h2>
            <span>
                <a href='https://www.linkedin.com/in/aaron-tran-250a6b29a/' target='_blank'>
                    <img src={linkedInIcon} alt='LinknedIn icon'/>
                </a>
                <a href='https://github.com/MiniSleep' target='_blank'>
                    <img src={gitHubIcon} alt='GitHub icon'/>
                </a>
            </span>
            <p className={styles.description}>
                With a passion for developing mondern Rect web apps for commercial businesses.
            </p>
            <a href={CV} target='_blank'>
                <button className='hover'>
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero