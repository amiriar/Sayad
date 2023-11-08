import React from 'react';
import styles from './styles/creators.module.css';
import Image from 'next/image';

import { AiFillInstagram } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Page = () => {
    return (
        <>
            <Navbar/>
                <div className={styles.container} id='mt'>
                    <div className={styles.grid}>
                        <div className={styles.right}>
                            <div className={styles.text}>
                                <h2 className={styles.creatorsname}>امیررضا عبدالرحیمی</h2>
                                <br />
                                <p className={styles.about}>
                                ?لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                                و با استفاده از طراحان گرافیک است، چاپگره
                                ا و متون بلکه روزنامه و مجله در ستون و سطر
                                آنچنان که لازم است، و برای شرایط فعلی تکنول
                                وژی مورد نیاز، و کاربردهای متنوع با هدف به
                                بود ابزارهای کاربردی می باشد، کتابهای زیاد
                                ی در شصت و سه درصد گذشته حال و آینده، شناخ
                                ت فراوان جامعه و متخصصان را می طلبد، تا با 
                                نرم افزارها شناخت بیشتری را برای طراحان را
                                یانه ای علی الخصوص طراحان خلاقی، و فرهنگ پی
                                شرو در زبان فارسی ایجاد کرد، در این صورت م
                                ی توان امید داشت که تمام و دشواری موجود در
                                    ارائه راهکارها، و شرایط سخت تایپ به پایان
                                    رسد و زمان مورد نیاز شامل حروفچینی دستاور
                                دهای اصلی، و جوابگوی سوالات پیوسته اهل دنیا
                                ی موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                            </div>
                            <br />
                            <div className={styles.icons}>
                                <Link href={'https://t.me/amiriar'}>
                                <FaTelegram size={21} color="#f5f5f5"/>
                                </Link>
                                <Link href={'https://www.instagram.com/Its_amiriar/'}>
                                <AiFillInstagram size={25} color="#f5f5f5" />
                                </Link>
                                <Link href={'https://github.com/amiriar'}>
                                <BsGithub size={23} color="#f5f5f5" />
                                </Link>
                                <Link href={'https://www.linkedin.com/in/amirreza-abdolrahimi-a502a726b/'}>
                                <BsLinkedin size={21} color="#f5f5f5" />
                                </Link>
                            </div>
                            </div>
                            <div className={styles.left1}>
                                <div className={styles.imageTag}>
                                    <Image
                                    src={'/images/creators/Sup.jpg'}
                                    alt="photo"
                                    width={1000}
                                    height={1000}
                                    className={styles.pic}
                                    />
                                </div>
                            </div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.left2}>
                            <div className={styles.imageTag}>
                                <Image
                                src={'/images/creators/soroush-mashayekhi.jpg'}
                                alt="photo"
                                width={1000}
                                height={1000}
                                className={styles.pic}
                                />
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.text}>
                                <h2 className={styles.creatorsname}>سروش مشایخی</h2>
                                <br />
                                <p className={styles.about}>
                                    سروش مشایخی دانش آموز پایه دوازدهم ، هنرستان شهید صیاد شیرازی در سال 1402 هستم علاقه زیادی به موسیقی و کتاب و گیم دارم و تقریبا بدون اینها نمیتونم روز رو بگذرونم
                                    تا الان کتاب هایی از قبیل عادت های اتمی ، بی حد و مرز ، اثر مرکب و چهار اثر  رو خوانده ام
                                    در حال یادگیری زبان انگلیسی و جاوااسکریپت و ریکت هستم برای ارتباط با من از لینک های زیر استفاده کن :))
                                </p>
                        </div>
                        <br />
                        <div className={styles.icons}>
                                <Link href={'https://t.me/im_grandiv'}>
                                <FaTelegram size={21} color="#f5f5f5" />
                                </Link>
                                <Link href={'https://www.instagram.com/soroush_.msh/'}>
                                <AiFillInstagram size={25} color="#f5f5f5" />
                                </Link>
                                <Link href={'/'}>
                                <BsGithub size={23} color="#f5f5f5" />
                                </Link>
                                <Link href={'/'}>
                                <BsLinkedin size={21} color="#f5f5f5" />
                                </Link>
                        </div>
                    </div>
                    </div>
                </div>
            <Footer/>
        </>
    );
};

export default Page;
