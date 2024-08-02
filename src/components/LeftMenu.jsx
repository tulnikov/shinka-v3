import LeftMenuItem from "./LeftMenuItem.jsx";
import {GiCartwheel} from "react-icons/gi";
import {FaRegSnowflake, FaUsers} from "react-icons/fa";
import {MdCurrencyRuble} from "react-icons/md";
import {IoCalendarNumberOutline, IoCarSportOutline} from "react-icons/io5";

function LeftMenu() {
    const menuArr = [
        {
            id: 1,
            title: 'Шиномонтаж',
            img: <GiCartwheel/>,
            role: 1
        },
        {
            id: 2,
            title: 'Сезонная переобувка',
            img: <FaRegSnowflake/>,
            role: 1
        },
        {
            id: 3,
            title: 'Клиенты',
            img: <IoCarSportOutline/>,
            role: 1
        },
        {
            id: 4,
            title: 'Сотрудники',
            img: <FaUsers/>,
            role: 1
        },
        {
            id: 5,
            title: 'Расходы',
            img: <MdCurrencyRuble/>,
            role: 1
        },
        {
            id: 6,
            title: 'График смен',
            img: <IoCalendarNumberOutline/>,
            role: 1
        },
    ]
    return <>
        {menuArr.map(item => {
                return <LeftMenuItem item={item} key={item.id}/>
            }
        )}
    </>
}

export default LeftMenu;