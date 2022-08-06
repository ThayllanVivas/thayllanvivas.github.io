import styles from '../../styles/Projects.module.scss'
import example from '../../assets/example.png'
import themovielib from '../../assets/themovielib.png'

export default function Projects(){
    return (
        <main id={styles.PROJECT}>

            <div id={styles.container}>

                <h2>PROJETOS</h2>
                <div id={styles.project_container}>
                    <div className={styles.project}>
                        <img src={example} />
                        <h3>PROJETO 2</h3>
                        <p>Descrição do projeto vem aqui</p>
                    </div>
                    <div className={styles.project}>
                        <img src={themovielib} />
                        <h3>THE MOVIE LIB</h3>
                        <p>
                            Site que indica os top 20 filmes mais avaliados ao usuário. <br />
                            Foi realizado com API do TMDB usando JavaScript e Vite;
                        </p>
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