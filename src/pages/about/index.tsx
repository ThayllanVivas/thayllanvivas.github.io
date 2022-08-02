import styles from '../../styles/About.module.scss'
import profile from '../../assets/profile.png'
import downloa_da_nuvem from '../../assets/download-da-nuvem.png'
import email from '../../assets/email.png'

export default function About(){
    return (
        <main>
            <div id={styles.img}>
                <img src={profile}/>
            </div>

            <div id={styles.apresentation}>
                <h2>SOBRE MIM</h2>
                <p>Atualmente estou com 23 anos, sou técnólogo em Sistemas para Internet pela faculdade de Maringá, no Paraná. <br />
                Desde que me formei em 2020 busquei atrás de ser um desenvolvedor. <br />
                Trabalhei em empresas de médio e grande porte, sendo uma delas uma empresa da Rússia.<br />
                </p>
                <span>Feira de Santana, Bahia</span>

                <div id={styles.contact}>
                    <a href='./ThayllanVivas.pdf' download id={styles.resume}>
                        <img className={styles.logoimg} src={downloa_da_nuvem} />
                        Currículo
                    </a>
                    <a href="mailto: thayllanvivas@hotmail.com?subject=Thayllan, vim pelo seu portfólio! :)" target="_blank" id={styles.email}>
                        <img className={styles.logoimg} src={email} />
                        <p>E-mail</p>
                    </a>
                </div>
            </div>            
        </main>
    )
}