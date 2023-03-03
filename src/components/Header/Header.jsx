import { useState } from 'react';
import cn from 'classnames';

import styles from './Header.module.scss';

const Header = ({about, footer, ambassadors, projects}) => {
    const scrollToElement = (element) => {
        setActiveMenu(false);
        element.current.scrollIntoView({behavior: "smooth"});
    };
    const [activeMenu, setActiveMenu] = useState(false);
    return <header className='header'>
        <div className="container">
            <div className={cn(styles.header, activeMenu && styles.active)}>
                <h1 className={styles.title}>CS Agency</h1>
                <nav className={styles.menu}>
                    <ul className={styles.menu__list}>
                        <li onClick={() => {scrollToElement(about)}} className={styles.item}>About us</li>
                        <li onClick={() => {scrollToElement(ambassadors)}} className={styles.item}>Ambassador Portfolio</li>
                        <li onClick={() => {scrollToElement(projects)}} className={styles.item}>Projects Portfolio</li>
                        <li onClick={() => {scrollToElement(footer)}} className={styles.item}>Contact us</li>
                        <li className={styles.item}><a href='https://docs.google.com/spreadsheets/d/1ZyMsQjCW4NgotKssQMQ2vG8ugGMauWvzGyWZRn5mjPE/edit#gid=0'target={'_blank'} className={styles.item__link}>KOLs list</a></li>
                    </ul>
                </nav>
                <div onClick={() => {setActiveMenu(!activeMenu)}} className={styles.btn}>
                    <div className={styles.btn__item} />
                    <div className={styles.btn__item} />
                    <div className={styles.btn__item} />
                </div>
            </div>
        </div>
    </header>
};

export default Header;