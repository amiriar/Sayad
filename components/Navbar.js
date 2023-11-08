import React from 'react'
import styles from "./Navbar.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <div className={styles.logoName}>
                        <Link href={'/'} className={styles.link}>
                            <h1 className={styles.name}>
                                هنرستان شهید صیاد شیرازی 
                            </h1>
                        </Link>
                    </div>
                    <div className={styles.loginIcon}>
                        <Image 
                            src={'/images/icons/sayad-icon_gold.png'}
                            width={40}
                            height={44}
                            draggable={false}
                        />
                    </div>
                    <div className={styles.navItems}>
                        <Link href={"/"} className={styles.link}>
                            <h4>
                                خانه
                            </h4>
                        </Link>
                        <Link href={"/pictures"} className={styles.link}>
                            <h4>
                                خاطرات
                            </h4>
                        </Link>
                        <Link href={"/contact"} className={styles.link}>
                            <h4>
                                ارتباط با ما
                            </h4>
                        </Link>
                    </div>
                </nav>
            </header>
    )
}

export default Navbar