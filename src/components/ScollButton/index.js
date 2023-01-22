import React from 'react'
import { Link } from 'gatsby';
import styles from './ScrollButton.module.css';

function ScrollButton() {
    return (
        <Link to="#about-me">
            <div className={styles.center}>
                <div className={styles.down}></div>
            </div>
        </Link>
    )
}

export default ScrollButton