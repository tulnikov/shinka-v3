import {GiCarWheel} from "react-icons/gi";
import styles from "./LeftBar.module.css";
import LeftMenu from "./LeftMenu";

function LeftBar() {

    return <div id={styles.leftBar}>
        <div id={styles.logoBar}>
            <GiCarWheel id={styles.logoImg}/>
            <span>Баланс</span>
        </div>
        <LeftMenu/>
    </div>
}

export default LeftBar;
