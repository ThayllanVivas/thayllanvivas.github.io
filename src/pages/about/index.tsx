import styles from '../../styles/About.module.scss'
import profile from '../../assets/profile.png'
import download_da_nuvem from '../../assets/download-da-nuvem.png'
import email from '../../assets/email.png'
import eu from '../../assets/programacao.png'

export default function About(){
    return (
        <main id={styles.ABOUT}>
            <div id={styles.img}>
                <img src={eu}/>
            </div>

            <div id={styles.apresentation}>
                <h2>SOBRE MIM</h2>
                <p>
                    Sou técnólogo em Sistemas para Internet pela Universidade de Maringá, no Paraná,
                    e estranhamente curioso por tecnologia; <br />
                    Desde que me formei em 2020 busquei atrás de ser um desenvolvedor. <br />
                    Trabalhei em empresas de médio e grande porte, sendo uma delas uma empresa da Rússia.<br />
                    
                </p>
                <span>Feira de Santana, Bahia - 23 anos</span>

                <div id={styles.contact}>
                    <a href='https://drive.google.com/file/d/19XU1YbFB4PP0cU65sFuGjA9AhdcAQWfb/view?usp=sharing' target='_blank' id={styles.resume}>
                        <img className={styles.logoimg} src={download_da_nuvem} />
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