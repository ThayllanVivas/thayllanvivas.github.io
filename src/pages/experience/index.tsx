import styles from '../../styles/Experience.module.scss'
import profile from '../../assets/profile.png'
import experience_logo from '../../assets/experience.png'

export default function Experience(){
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

                {/* <div id={styles.contact}>
                    <a href='/experiences' id={styles.experience}>
                        <img id={styles.experienceimg} src={experience_logo} />
                        Experiências
                    </a>
                </div> */}
            </div>            
        </main>
    )
}