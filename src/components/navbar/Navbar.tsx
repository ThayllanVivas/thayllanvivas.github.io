import { Link } from 'react-router-dom'
import logo from '../../assets/favicon.png'
import styles from '../../styles/Navbar.module.scss'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <div>
                <Link to="/home">
                    <img src={logo} alt="logo" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/home">Home</Link></li>
                    <li className={styles.item}><Link to="/about">Sobre</Link></li>
                    <li className={styles.item}><Link to="/experience">Experiências</Link></li>
                    <li className={styles.item}><Link to="/projects">Projetos</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar