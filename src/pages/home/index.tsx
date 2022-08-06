import styles from '../../styles/Home.module.scss'
import coder from '../../assets/programacao.png'
import github_logo from '../../assets/github.png'
import linkedin_logo from '../../assets/linkedin.png'

export default function Home(){
    return (
        <main id={styles.HOME}>
            <div id={styles.apresentation}>
                <span>HI DEVS! EU SOU</span>
                <span id={styles.name}>THAYLLAN VIVAS</span>
                <span>DESENVOLVEDOR FULL STACK</span>

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
                <img src={coder}/>
            </div>
        </main>
    )
}