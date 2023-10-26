import React from 'react'
import styles from "./Footer.module.css"
import { LiaTelegram } from 'react-icons/lia'
import { BiLogoGmail } from 'react-icons/bi'
import { AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <p className={styles.text}>
                    &copy;
                    1402 تمامی حقوق محفوظ است، امیررضا عبدالرحیمی
                </p>
            </div>
            <div className={styles.icon}>
                <Link href={''} className={styles.link}>
                    <sapn>
                        <LiaTelegram size={25} />
                    </sapn>
                </Link>
                <Link href={'mailto:abdolrahimiamirreza@gmail.com'} className={styles.link}>
                    <span>
                        <BiLogoGmail size={25} />
                    </span>
                </Link>
                <Link href={'https://www.linkedin.com/in/amirreza-abdolrahimi-a502a726b/'} className={styles.link}>
                    <span>
                        <AiFillLinkedin size={25} />
                    </span>
                </Link>
            </div>
        </footer>
    )
}

export default Footer