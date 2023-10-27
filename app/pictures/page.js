"use client"
import React from 'react'
import styles from './styles/pictures.module.css'
import Image from 'next/image'
import Masonry from 'react-masonry-css'

const page = () => {

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    const images = [
        "/F-15.jpg",
        "/Eiffel.jpg",
        "/F-15.jpg",
        "/Eiffel.jpg",
        "/F-15.jpg",
        "/Eiffel.jpg",
        "/F-15.jpg",
        "/Eiffel.jpg",
        "/F-15.jpg",
        "/Eiffel.jpg",
        "/F-15.jpg",
        "/Eiffel.jpg",
        "/F-15.jpg",
        "/Eiffel.jpg",
        "/F-15.jpg",
    ]

    return (
        <div>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((item ,index) => (
                    <Image src={item} key={index} alt={index} width={10000} height={10000} className='pictureItem' />
                ))}
            </Masonry>
        </div>
    )
}

export default page