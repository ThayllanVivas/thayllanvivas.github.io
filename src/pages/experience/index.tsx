import styles from '../../styles/Experience.module.scss'
import profile from '../../assets/profile.png'
import experience1_logo from '../../assets/experiencia1.png'
import experience2_logo from '../../assets/experiencia2.png'
import experience3_logo from '../../assets/experiencia3.png'
import experience4_logo from '../../assets/experiencia4.png'
import experience5_logo from '../../assets/experiencia5.png'

export default function Experience(){
    return (
        <main id={styles.EXPERIENCE}>

            <div id={styles.experience_container}>
                <h2>EXPERIÊNCIAS PROFISSIONAIS</h2>

                <div className={styles.experience_container}>
                    <div className={styles.experience_info}>
                        <p className={styles.title_experience}>Desenvolvedor Full Stack</p>
                        <p className={styles.date_experience}>FREELANCER | Jan 2021 - Momento</p> 
                    </div>

                    <div className={styles.experience_detail}>
                        <div className={styles.experience_img}>
                            <img src={experience5_logo}/>
                        </div>

                        <div className={styles.job_description_experience}>
                            {/* <h2>Dentro os projetos já feitos, esses são os que mais me desafiaram:</h2> */}
                            <p>
                                ▪ Desenvolvi um sistema web para empresa em que trabalhei com as tecnologias: Node | TypeScript | NextJs, além do Express, SQL Server, PostegreSQL e do Prisma Cliente
                            </p>
                            <p>
                                ▪ Um sistema web para cálculo de custo de projeto;
                            </p>
                            <p>
                                ▪ Sistema para pizzaria receber pedidos de pizza;
                            </p>
                            <p>
                                ▪ Uma página web que informa os top 20 filmes mais bem avaliados.
                            </p>
                            <p>
                                ▪ Um chat app para conversas em grupo em tempo real utilizando Node e Socket.io.
                            </p>
                        </div>  
                    </div> 
                </div>

                <div className={styles.experience_container}>
                    <div className={styles.experience_info}>
                        <p className={styles.title_experience}>Assistente de MelhorIa Específica</p>
                        <p className={styles.date_experience}>GQS SEGUROS | Dez 2021 - Mai 2022</p> 
                    </div>

                    <div className={styles.experience_detail}>
                        <div className={styles.experience_img}>
                            <img src={experience4_logo}/>
                        </div>

                        <div className={styles.job_description_experience}>
                            {/* <h2>Dentro os projetos já feitos, esses são os que mais me desafiaram:</h2> */}
                            <p>
                                ▪ Elaborei dashboards e relatórios utilizando Excel avançado sobre desenvolvimento e progressão da empresa, o que auxiliou na tomada de decisão;
                            </p>
                            <p>
                                ▪ Leitura de dados e reconhecimento de padrões em tratamento e resolução de ocorrências sobre sinistralidades e abertura de chamado na empresa;
                            </p>
                            <p>
                                ▪ Treinei e acompanhei colaboradores sobre processos da empresa para maior desempenho;
                            </p>
                        </div>  
                    </div> 
                </div>

                <div className={styles.experience_container}>
                    <div className={styles.experience_info}>
                        <p className={styles.title_experience}>Assistente de TI</p>
                        <p className={styles.date_experience}>MAXIM | Mar 2021 - Nov 2021</p> 
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
                        <p className={styles.title_experience}>Auxiliar de TI</p>
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
                                ▪ Apresentei relatórios semanais sobre avanço do serviço à administração;
                            </p>
                        </div>  
                    </div> 
                </div>
                
                <div className={styles.experience_container}>
                    <div className={styles.experience_info}>
                        <p className={styles.title_experience}>Suporte de TI [estágio]</p>
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

        </main>
    )
}