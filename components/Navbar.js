import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import styles from "./Navbar.module.css"
import Link from 'next/link'

const Navbar = () => {
    return (
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <div className={styles.logoName}>
                        <h1 className={styles.name}>
                            هنرستان شهید صیاد شیرازی 
                        </h1>
                    </div>
                    <div className={styles.navItems}>
                        <Link href={"/"} className={styles.link}>
                            <h4>
                                خانه
                            </h4>
                        </Link>
                        {/* <Link href={"/news"} className={styles.link}>
                            <h4>
                                اخبار
                            </h4>
                        </Link> */}
                        <Link href={"/pictures"} className={styles.link}>
                            <h4>
                                عکس ها
                            </h4>
                        </Link>
                        <Link href={"/contact"} className={styles.link}>
                            <h4>
                                ارتباط با ما
                            </h4>
                        </Link>
                        {/* <Link href={"/about"} className={styles.link}>
                            <h4>
                                درباره ما
                            </h4>
                        </Link> */}
                    </div>
                    {/* <div className={styles.loginIcon}>
                        <Link href={'/login'} className={styles.link}>
                            <FaUserCircle size={35} />
                        </Link>
                    </div> */}
                </nav>
            </header>
    )
}

export default Navbar