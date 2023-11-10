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
        '/images/1.jpg',
        '/images/2.heic',
        '/images/3.heic',
        '/images/4.jpg',
        '/images/5.jpg',
        '/images/6.jpg',
        '/images/7.jpg',
        '/images/8.jpg',
        '/images/9.jpg',
        '/images/10.heic',
        '/images/11.heic',
        '/images/12.heic',
        '/images/13.heic',
        '/images/14.heic',
        '/images/15.heic',
        '/images/16.heic',
        '/images/17.heic',
        '/images/18.heic',
        '/images/19.heic',
        '/images/20.heic',
        '/images/21.heic',
        '/images/22.heic',
        '/images/23.jpg',
        '/images/24.heic',
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
                        {images.map((item) => (
                            <Image src={item} key={item} alt={item} width={1000} height={1000} className='pictureItem' draggable={false} />
                        ))}
                    </Masonry>
                </div>
            <Footer/>
        </>
    )
}

export default page