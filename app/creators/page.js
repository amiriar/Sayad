import React from 'react'
import styles from './styles/creators.module.css'
import Image from 'next/image'

import { AiFillInstagram } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { FaTelegram } from 'react-icons/fa'
import Link from 'next/link'

const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.right}>
                    <div className={styles.text}>
                        <h2>امیررضا عبدالرحیمی</h2><br/>
                        <p>
                            ?لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            اپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود 
                            بزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                            جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، 
                            ر این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
                            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
                            و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div><br/>
                    <div className={styles.icons}>
                        <Link href={'/'}>
                            <FaTelegram size={20} color='#f5f5f5'/>
                        </Link>
                        <Link href={'/'}>
                            <AiFillInstagram size={24} color='#f5f5f5'/>
                        </Link>
                        <Link href={'/'}>
                            <BsGithub size={22} color='#f5f5f5'/>
                        </Link>
                        <Link href={'/'}>
                            <BsLinkedin size={20} color='#f5f5f5' />
                        </Link>
                    </div>
                </div>
                <div className={styles.left1}>
                    <Image
                        src={'/images/creators/Sup.jpg'}
                        alt='photo'
                        width={1000}
                        height={1000}
                        className={styles.pic}
                    />
                </div>
            </div>
            <div className={styles.grid}>
                <div className={styles.left2}>
                    <Image
                        src={'/images/creators/soroush-mashayekhi.jpg'}
                        alt='photo'
                        width={1000}
                        height={1000}
                        className={styles.pic}
                    />
                </div>
                <div className={styles.right}>
                    <div className={styles.text}>
                        <h2>سروش مشایخی</h2><br/>
                        <p>
                            ?لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            اپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود 
                            بزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                            جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، 
                            ر این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
                            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
                            و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div><br/>
                    <div className={styles.icons}>
                            <Link href={'/'}>
                                <FaTelegram size={20} color='#f5f5f5'/>
                            </Link>
                            <Link href={'/'}>
                                <AiFillInstagram size={24} color='#f5f5f5'/>
                            </Link>
                            <Link href={'/'}>
                                <BsGithub size={22} color='#f5f5f5'/>
                            </Link>
                            <Link href={'/'}>
                                <BsLinkedin size={20} color='#f5f5f5' />
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page