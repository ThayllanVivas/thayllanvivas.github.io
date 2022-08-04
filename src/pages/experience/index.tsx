import styles from '../../styles/Experience.module.scss'
import profile from '../../assets/profile.png'
import experience1_logo from '../../assets/experiencia1.png'
import experience2_logo from '../../assets/experiencia2.png'
import experience3_logo from '../../assets/experiencia3.png'
import experience4_logo from '../../assets/experiencia4.png'

export default function Experience(){
    return (
        <div id={styles.main_experience}>

            <div id={styles.container}>
                <h2>EXPERIÊNCIAS PROFISSIONAIS</h2>

                <div className={styles.experience_container}>
                    <div className={styles.experience_info}>
                        <p className={styles.title_experience}>Desenvolvedor Full Stack</p>
                        <p className={styles.date_experience}>FREELANCER | Mai 2022 - Momento</p> 
                    </div>

                    <div className={styles.experience_detail}>
                        <div className={styles.experience_img}>
                            <img src={experience4_logo}/>
                        </div>

                        <div className={styles.job_description_experience}>
                            {/* <h2>Dentro os projetos já feitos, esses são os que mais me desafiaram:</h2> */}
                            <p>
                                ▪ Desenvolvi um sistema web para a antiga empresa em que trabalhei com as tecnologias: Node | TypeScrip | NextJs, além do Express, PostegreSQL e do Prisma Cliente
                            </p>
                            <p>
                                ▪ Desenvolvi também sistema web para cálculo de custo de projeto;
                            </p>
                            <p>
                                ▪ Sistema para pizzaria receber pedidos;
                            </p>
                            <p>
                                ▪ E uma página web que informa os top 20 filmes mais bem avaliados.
                            </p>
                        </div>  
                    </div> 
                </div>

                <div className={styles.experience_container}>
                    <div className={styles.experience_info}>
                        <p className={styles.title_experience}>Assistente de T.I</p>
                        <p className={styles.date_experience}>MAXIM | Mar 2021 - Out 2021</p> 
                    </div>

                    <div className={styles.experience_detail}>
                        <div className={styles.experience_img}>
                            <img src={experience3_logo}/>
                        </div>

                        <div className={styles.job_description_experience}>
                            <p>
                                ▪ Prestava suporte a 20+ motoristas por dia sobre
                                demandas de logística, o que contribuiu para ser a
                                subdivisão mais rentável no estado;
                            </p>
                            <p>
                                ▪ Criei relatórios de progressos mensais / trimestrais, que
                                auxiliou na tomada de decisão e planejamento da
                                unidade;
                            </p>
                            <p>
                                ▪ Participei e fui autor de ideias para desenvolvimento do
                                setor da empresa junto à equipe, que, juntos, obtivemos
                                mais de 500 motoristas ativos ao mesmo tempo na
                                unidade FSA; 
                            </p>
                        </div>  
                    </div> 
                </div>

                <div className={styles.experience_container}>
                    <div className={styles.experience_info}>
                        <p className={styles.title_experience}>Auxiliar de T.I</p>
                        <p className={styles.date_experience}>CONTAS CONTABILIDADE | Out 2020 - Mar 2021</p> 
                    </div>

                    <div className={styles.experience_detail}>
                        <div className={styles.experience_img}>
                            <img src={experience2_logo}/>
                        </div>

                        <div className={styles.job_description_experience}>
                            <p>
                                ▪ Instalei windows server 2012 e implementei sistema Gestta na empresa;
                            </p>
                            <p>
                                ▪ Treinei colaboradores novos e antigos. Cerca de 36 contábeis, 
                                16 fiscais e 12 de recursos humanos;
                            </p>
                            <p>
                                ▪ Apresenetei relatórios semanais sobre avanço do serviço à administração;
                            </p>
                        </div>  
                    </div> 
                </div>
                
                <div className={styles.experience_container}>
                    <div className={styles.experience_info}>
                        <p className={styles.title_experience}>Suporte de T.I [estágio]</p>
                        <p className={styles.date_experience}>VIPAL BORRACHAS | Set 2018 - Set 2020</p> 
                    </div>

                    <div className={styles.experience_detail}>
                        <div className={styles.experience_img}>
                            <img src={experience1_logo}/>
                        </div>

                        <div className={styles.job_description_experience}>
                            <p>
                                ▪ Instalei e administrei 150+ equipamentos de tecnologia
                                da empresa que auxiliavam os colaboradores e os
                                ajudavam a evitar acidentes de trabalho
                            </p>
                            <p>
                                ▪ Solucionei ocorrências do setor de tecnologia dando
                                prioridade aos referentes à produção para evitar atrasos
                                e lentidões no setor;
                            </p>
                            <p>
                                ▪ Desenvolvi projetos junto à equipe, onde juntos
                                concluímos em 1/5 do tempo;
                            </p>
                        </div>  
                    </div> 
                </div>

            </div>

        </div>
    )
}