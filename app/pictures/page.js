import React from 'react'
import styles from './styles/pictures.module.css'
import Image from 'next/image'

const page = () => {
    return (
        // <div className={styles.row}>
        //     <div className={styles.column}>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //     </div>
        //     <div className={styles.column}>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //     </div>
        //     <div className={styles.column}>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //     </div>
        //     <div className={styles.column}>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //         <Image src={'/F-15.jpg'} alt='photo' height={500} width={10000}/>
        //     </div>
        // </div>
        <div className="container">
            <div className="gallery">
                <figure className="gallery__item gallery__item--1">
                    <Image src={'/F-15.jpg'} alt="Gallery image 1" className="gallery__img" height={10000} width={10000}/>
                </figure>
                <figure className="gallery__item gallery__item--2">
                    <Image src={'/F-15.jpg'} alt="Gallery image 2" className="gallery__img" height={10000} width={10000}/>
                </figure>
                <figure className="gallery__item gallery__item--3">
                    <Image src={'/F-15.jpg'} alt="Gallery image 3" className="gallery__img" height={10000} width={10000}/>
                </figure>
                <figure className="gallery__item gallery__item--4">
                    <Image src={'/F-15.jpg'} alt="Gallery image 4" className="gallery__img" height={10000} width={10000}/>
                </figure>
                <figure className="gallery__item gallery__item--5">
                    <Image src={'/F-15.jpg'} alt="Gallery image 5" className="gallery__img" height={10000} width={10000}/>
                </figure>
                <figure className="gallery__item gallery__item--6">
                    <Image src={'/F-15.jpg'} alt="Gallery image 6" className="gallery__img" height={10000} width={10000}/>
                </figure>
            </div>
            <br/>
            <div className='gallery'>
                <figure className="gallery__item gallery__item--1">
                    <Image src={'/F-15.jpg'} alt="Gallery image 1" className="gallery__img" height={10000} width={10000}/>
                </figure>
                <figure className="gallery__item gallery__item--2">
                    <Image src={'/F-15.jpg'} alt="Gallery image 2" className="gallery__img" height={10000} width={10000}/>
                </figure>
                <figure className="gallery__item gallery__item--3">
                    <Image src={'/F-15.jpg'} alt="Gallery image 3" className="gallery__img" height={10000} width={10000}/>
                </figure>
                <figure className="gallery__item gallery__item--4">
                    <Image src={'/F-15.jpg'} alt="Gallery image 4" className="gallery__img" height={10000} width={10000}/>
                </figure>
                <figure className="gallery__item gallery__item--5">
                    <Image src={'/F-15.jpg'} alt="Gallery image 5" className="gallery__img" height={10000} width={10000}/>
                </figure>
                <figure className="gallery__item gallery__item--6">
                    <Image src={'/F-15.jpg'} alt="Gallery image 6" className="gallery__img" height={10000} width={10000}/>
                </figure>
            </div>
        </div>
    )
}

export default page