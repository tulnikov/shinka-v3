import styles from './RightBar.module.css';
import {FaUser} from "react-icons/fa";
import {FaRegMessage} from "react-icons/fa6";
import TitlePage from "./TitlePage";
import ListUslug from "./ListUslug";
import Client from "./Client";

function RightBar() {
    return <div id={styles.rightBar}>
        <div id={styles.topBar}>
            <FaRegMessage id={styles.message}/>
            <FaUser id={styles.avatar}/>
        </div>
        <TitlePage title='Шиномонтаж'/>
        <div id={styles.main}>
            <ListUslug/>
            <Client/>
        </div>


    </div>
}

export default RightBar;