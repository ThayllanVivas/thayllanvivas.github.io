import { Link } from 'react-router-dom'
import logo from '../../assets/favicon.png'
import styles from '../../styles/Navbar.module.scss'
import home from '../../assets/homenav.png'
import about from '../../assets/aboutnav.png'
import experience from '../../assets/experiencenav.png'
import project from '../../assets/projectnav.png'

function Navbar(){
    return (
        <nav id={styles.navbar}>
            <div id={styles.container}>
                <ul id={styles.list}>
                    <li className={styles.item}>
                        <Link to="/"><img src={home} alt='home logo'/>home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/about"><img src={about} alt='about logo'/>about</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/experience"><img src={experience} alt='about logo'/>xp's</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects"><img src={project} alt='about logo'/>projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar