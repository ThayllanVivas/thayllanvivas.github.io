import styles from '../../styles/Projects.module.scss'
import example from '../../assets/example.png'

export default function Projects(){
    return (
        <main id={styles.PROJECT}>

            <div id={styles.container}>

                <h2>PROJETOS</h2>
                <div id={styles.project_container}>
                    <div className={styles.project}>
                        <img src={example} />
                        <h3>PROJETO 1</h3>
                        <p>Descrição do projeto vem aqui</p>
                    </div>
                    <div className={styles.project}>
                        <img src={example} />
                        <h3>PROJETO 2</h3>
                        <p>Descrição do projeto vem aqui</p>
                    </div>
                    <div className={styles.project}>
                        <img src={example} />
                        <h3>PROJETO 3</h3>
                        <p>Descrição do projeto vem aqui</p>
                    </div>
                    <div className={styles.project}>
                        <img src={example} />
                        <h3>PROJETO 4</h3>
                        <p>Descrição do projeto vem aqui</p>
                    </div>
                </div>
                
            </div>

        </main>
    )
}