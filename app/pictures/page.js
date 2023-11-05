"use client"
import React from 'react'
import styles from './styles/pictures.module.css'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    const images = [
        "/images/1.jpg",
        "/images/2.heic",
        "/images/3.heic",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg",
        "/images/7.jpg",
        "/images/8.jpg",
        //
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg",
        "/images/7.jpg",
        "/images/8.jpg",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg",
        "/images/7.jpg",
        "/images/8.jpg",
        //
    ]

    return (
        <>
            <Navbar/>    
                <div>
                    <Masonry
                        breakpointCols={breakpoints}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {images.map((item ,index) => (
                            <Image src={item} key={index} alt={index} width={1000} height={1000} className='pictureItem' draggable={false} />
                        ))}
                    </Masonry>
                </div>
            <Footer/>
        </>
    )
}

export default page