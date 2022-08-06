import styles from '../../styles/Container.module.scss'

function Container(props: any){
    return (
        <main className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</main>
    )
}

export default Container