import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <>
            <Navbar/>
                <div className={styles.container} id='mt'>
                    <div className={styles.imageContainer}>
                        <Image src={'/images/teachers/RezaSaeedinia.jpg'} alt="Teacher" width={400} height={400} draggable={false}/>
                    </div>
                    <div className={styles.content}>
                        <h1>درباره معلم</h1>
                        <p>
                            ?لورم ایپسوم متن ساختگی ب
                            ا تولید سادگی نامفهوم از صنعت چاپ، و با استفاده ا
                            ز طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                            جله در ستون و سطرآنچنان که لازم اس
                            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربر
                            ی متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                            ابهای زیادی در شصت و سه درصد گذشته حال و آیند
                            شناخت فراوان جامعه و متخصصان را می طلبد، تا ب
                            رم افزارها شناخت بیشتری را برای طراحان رایانه 
                            علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان 
                            سی ایجاد کرد، در این صورت می توان امید داشت ک
                            مام و دشواری موجود در ارائه راهکارها، و شرایط
                            ت تایپ به پایان رسد و زمان مورد نیاز شامل حرو
                            نی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اه
                            نیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>

                        <h1>تحصیلات</h1>
                        <ul>
                            <li>دکترای علوم تربیتی</li>
                            <li>کارشناسی ارشد علوم ریاضی</li>
                        </ul>

                        <h1>جوایز</h1>
                        <ul>
                            <li>جایزه بهترین معلم 1400</li>
                            <li>جایزه عالی در تدریس 1399</li>
                        </ul>

                        <h1>تماس</h1>
                        <p>ایمیل: teacher@example.com</p>
                        <p>تلفن: +123-456-7890</p>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default page