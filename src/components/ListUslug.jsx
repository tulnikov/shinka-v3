import styles from './ListUslug.module.css';
import {IoSearch} from "react-icons/io5";
import {IoIosCloseCircleOutline} from "react-icons/io";

function ListUslug() {
    return <div id={styles.listUslug}>
        <div id={styles.form}>

                <IoSearch id={styles.searchIcon}/>
                <input id={styles.searchInput}/>
                <div id={styles.clearBtn}><IoIosCloseCircleOutline/></div>


            <select defaultValue='1' id={styles.selectTypeAuto}>
                <option value='1'>Седан</option>
                <option value='2'>Внедорожник</option>
                <option value='3'>Коммерческий</option>
            </select>
            <select defaultValue='16' id={styles.selectDiameter}>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
            </select>
        </div>

        <div>List</div>
    </div>
}

export default ListUslug;