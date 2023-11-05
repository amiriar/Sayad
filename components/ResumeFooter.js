import Link from 'next/link'
import React from 'react'
import styles from './ResumeFooter.module.css'

const ResumeFooter = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.name}>
                <p className={styles.text}>
                    &copy;
                    1402 تمامی حقوق محفوظ است،
                    <Link href={'/creators'} className={styles.creators}>
                        طراحان سایت
                    </Link>
                </p>
            </div>
        </footer>
    )
}

export default ResumeFooter