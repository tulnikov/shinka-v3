import styles from './TitlePage.module.css';

function TitlePage({title}) {
    return <div id={styles.title}>{title}</div>

}

export default TitlePage;