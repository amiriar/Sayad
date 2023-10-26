import Image from 'next/image'
import React from 'react'

const TesetemonialCard = ({picSrc,name,text}) => {
    return (
        <div>
            {/* <Image
                src={picSrc}
                alt={name}
                width="100"
                height="100"
            /> */}
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
    )
}

export default TesetemonialCard