import styles from '../../styles/Projects.module.scss'
import example from '../../assets/example.png'
import themovielib from '../../assets/themovielib.png'
import gqsseguros from '../../assets/gqsseguros.png'
import info from '../../assets/info.png'
import tecnologia from '../../assets/tecnologia.png'

export default function Projects(){
    return (
        <main id={styles.PROJECT}>

            <div id={styles.container}>

                <h2>PROJETOS</h2>

                <div id={styles.project_container}>
                    <div className={styles.project}>
                        <div className={styles.project_demo}>
                            <a href='https://github.com/ThayllanVivas/gqsseguros' target='_blank'>
                                <img src='https://media.giphy.com/media/kxXrR1GLc83Qw4ZW1a/giphy.gif' />
                            </a>
                        </div>

                        <span></span>

                        <div className={styles.project_info}>
                            <h3>GQS SEGUROS</h3>
  
                            <div>
                                <p>
                                    <img src={info} /> Sistema web de gerenciamento de seguros para empresa GQS Seguros;
                                </p>
                                <p>
                                    <img src={tecnologia} /> Node, TypeScript, Axios, Express, Next e PostgreSQL;
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <div className={styles.project_demo}>
                            <a href='https://github.com/ThayllanVivas/movielib' target='_blank'>
                                <img src='https://media.giphy.com/media/6QQMSjjXHcmdnVjrak/giphy.gif' />
                            </a>
                        </div>

                        <span></span>

                        <div className={styles.project_info}>
                            <h3>THE MOVIE LIB</h3>
                            
                            <div>
                                <p>
                                    <img src={info} /> Site que indica os top 20 filmes mais avaliados no IMDB ao usuário;
                                </p>
                                <p>
                                    <img src={tecnologia} /> Criado com API do TMDB usando JavaScript, ReactJs e Vite;
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.project}>
                        <div className={styles.project_demo}>
                            <a href='https://github.com/ThayllanVivas/pizzaria' target='_blank'>
                                <img src='https://media.giphy.com/media/XxryC515A6rfl74B9y/giphy.gif' />
                            </a>
                        </div>

                        <span></span>

                        <div className={styles.project_info}>
                            <h3>SUJEITO PIZZA</h3>
                            
                            <div>
                                <p>
                                    <img src={info} /> Sistema web para receber ordens de pedidos de pizza direto do garçom;
                                </p>
                                <p>
                                    <img src={tecnologia} /> Node, Express, TypeScript, Axios, Next e PostgreSQL;
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <div className={styles.project_demo}>
                            <a href='https://github.com/ThayllanVivas/Costs' target='_blank'>
                                <img src='https://media.giphy.com/media/AqFqhTlJMgKkSjH2RC/giphy.gif' />
                            </a>
                        </div>

                        <span></span>

                        <div className={styles.project_info}>
                            <h3>Costs</h3>
                            
                            <div>
                                <p>
                                    <img src={info} /> Plataforma web para cálculo e gerenciamento de projetos;
                                </p>
                                <p>
                                    <img src={tecnologia} /> JavaScript e React
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <div className={styles.project_demo}>
                            {/* <a href='https://github.com/ThayllanVivas/gqsseguros' target='_blank'> */}
                                <img src='https://media.giphy.com/media/lLIs7tkn7SxgrW4Cwu/giphy.gif' />
                            {/* </a> */}
                        </div>

                        <span></span>

                        <div className={styles.project_info}>
                            <h3>EM BREVE</h3>
                            
                            <div>
                                <p>
                                    <img src={info} /> no spoilers
                                </p>
                                <p>
                                    <img src={tecnologia} /> no spoilers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </main>
    )
}