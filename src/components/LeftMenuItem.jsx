import styles from './LeftMenuItem.module.css';

function LeftMenuItem({item}) {


    return <div className={styles.item}>
        {item.img}
        {item.title}
    </div>
}

export default LeftMenuItem;