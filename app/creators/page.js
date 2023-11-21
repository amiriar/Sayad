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
                                    طراح سایتی تازه کار، آماده ام که به بهترین روش از این علاقه ی خودم یعنی طراحی سایت به بهترین روش در پیشرفت خودم استفاده کنم.
                                    <br/>
                                    من یک طراح سایت علاقه مند به یادگیری مباحثی چون امنیت شبکه برنامه نویسی هوش مصنوعی و.. هستم 
                                    <br/>
                                    در تهران به دنیا آمدم و از 15 سالگی شروع به برنامه نویسی و طراحی وب کردم 
                                    به تازگی هم علاقه ای به خواندن کتاب پیدا کردم کتاب هایی مانند "محاصره شده با احمق ها"، "محاصره شده با سایکوپات ها" و... <br/>
                                    اگر پیشنهادی درمورد کتاب های بعدی که باید بخونم یا نظری در مورد سایت دارین با لینک های پایین باهامون در ارتباط باشین :)
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
                                    src={'/images/creators/amiriar.jpg'}
                                    alt="photo"
                                    width={1000}
                                    height={1000}
                                    className={styles.pic}
                                    draggable={false}
                                    />
                                </div>
                            </div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.left2}>
                            <div className={styles.imageTag}>
                                <Image
                                src={'/images/creators/Soroush-Mashayekhi.jpg'}
                                alt="photo"
                                width={1000}
                                height={1000}
                                className={styles.pic}
                                draggable={false}
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
                                <Link href={'https://github.com/Grandiv06'}>
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
