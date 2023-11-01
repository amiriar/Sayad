"use client"
import React, { useEffect } from 'react'
import styles from './styles/contact.module.css'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { PiAddressBookFill } from 'react-icons/pi'
import { BsBookmarkStarFill } from 'react-icons/bs'
import "leaflet/dist/leaflet.css";
import Link from 'next/link'


const page = () => {

    useEffect(() => {
        // Check if the map container exists before initializing the map
        if (!document.querySelector("#map")) {
            return;
        }
    
        // Import Leaflet-related code here on the client side
        import("leaflet").then((L) => {
        if (!document.querySelector("#map")) {
          return; // Check again if the map container exists after the import
        }
    
        const map = L.map("map").setView([35.659078, 51.474325], 13);
    
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    
        L.circleMarker([35.659078, 51.474325], {
            color: "#000000",
            fillColor: "#FDD876",
            fillOpacity: 1,
            weight: 1,
        }).addTo(map);
        });
    }, []);

    return (
        <div className={styles.container}>
            <section className={styles.aboutSection}>
                <div className={styles.text}>
                    <div className={styles.right}>
                        <div className={styles.contact}>
                            <div>
                                <h2>روش های ارتباط با ما</h2>
                                <br/>
                                <p>
                                    <BsFillTelephoneFill size={20}/>
                                    تلفن: 
                                    <Link href={"tel:02133739091"} style={{color:"#f5f5f5",textDecoration:"none"}}>9091 3373 021</Link>
                                </p>
                                <p>
                                    <BsFillTelephoneFill size={20}/>
                                    تلفن: 
                                    <Link href={"tel:02133030001"} style={{color:"#f5f5f5",textDecoration:"none"}}>0001 3303 021</Link>
                                </p>
                                <p>
                                    <PiAddressBookFill size={25}/>
                                    آدرس: 
                                    اتوبان شهید محلاتی، خیابان نبرد جنوبی، جنب دانشگاه آزاد تهران جنوب
                                </p>
                                <p>
                                    <BsBookmarkStarFill size={20} />
                                    کد پستی: 
                                    1777613411
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.left}>
                        <div id="map" className={styles.homeMap} ></div>
                    </div>
                </div>
            </section>
            <div className={styles.quoteDiv}>
                <p className={styles.quote}>
                به نظر من تاریخ تولد و مرگ یک انسان ، همه زندگی او را تشکیل نمی دهد ، 
                <br/>
                آنچه که زندگی یک مرد را از نقطه آغاز ، از روز تولد تا لحظه مرگ می سازد
                <br/>
                "شخصیت ، روحیه جوانمردی ، صفا ، انسانیت و اخلاقیات اوست."
                </p><br/>
                <span className={styles.author}>&nbsp;&nbsp;&nbsp;&nbsp; غلامرضا تختی </span>
            </div>
        </div>
    )
}

export default page