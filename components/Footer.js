import React from 'react'
import styles from "./Footer.module.css"
import { LiaTelegram } from 'react-icons/lia'
import { BiLogoGmail } from 'react-icons/bi'
import { AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.name}>
                {/* <Image
                    src={'/images/Picsart_23-10-26_21-06-31-162.jpg'}
                    alt='me :D'
                    width={35}
                    height={35}
                    style={{borderRadius:"50%"}}
                    className={styles.smallHid}
                /> */}
                <p className={styles.text}>
                    &copy;
                    1402 تمامی حقوق محفوظ است،
                    <Link href={'/creators'} className={styles.creators}>
                        طراحان سایت
                    </Link>
                </p>
            </div>
            {/* <div className={styles.icon}>
                <Link target='_blank' href={'mailto:abdolrahimiamirreza@gmail.com'} className={styles.link}>
                    <span>
                        <BiLogoGmail size={25} />
                    </span>
                </Link>
                <Link target='_blank' href={'https://www.linkedin.com/in/amirreza-abdolrahimi-a502a726b/'} className={styles.link}>
                    <span>
                        <AiFillLinkedin size={25} />
                    </span>
                </Link>
            </div> */}
        </footer>
    )
}

export default Footer