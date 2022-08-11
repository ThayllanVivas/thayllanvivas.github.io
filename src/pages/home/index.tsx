import styles from '../../styles/Home.module.scss'
import coder from '../../assets/programacao.png'
import github_logo from '../../assets/github.png'
import linkedin_logo from '../../assets/linkedin.png'
import eu from '../../assets/eu2.png'
import nodejs from '../../assets/icon_node.png'
import typescript from '../../assets/icon_typescript.png'
import javascript from '../../assets/icon_javascript.png'
import react from '../../assets/icon_react.png'
import sql from '../../assets/icon_sql.png'

export default function Home(){
    return (
        <main id={styles.HOME}>
            <div id={styles.apresentation}>
                <span>HI DEVS! EU SOU</span>
                <span id={styles.name}>THAYLLAN VIVAS</span>
                <span>DESENVOLVEDOR FULL STACK</span>

                <div id={styles.icons_tech}>
                    <img src={nodejs} alt=''/>
                    <img src={typescript} alt=''/>
                    <img src={javascript} alt=''/>
                    <img src={react} alt=''/>
                    <img src={sql} alt=''/>
                </div>

                <div id={styles.contact}>
                    <a href='https://www.linkedin.com/in/thayllanvivas/' target='_blank' id={styles.linkedin}>
                        <img className={styles.logoimg} src={linkedin_logo} />
                        LinkedIn
                    </a>
                    <a href='https://github.com/thayllanvivas' target='_blank'  id={styles.github}>
                        <img className={styles.logoimg} src={github_logo} />
                        GitHub
                    </a>
                </div>
            </div>

            <div id={styles.img}>
                <img src={eu}/>
            </div>
        </main>
    )
}