'use client'


import { useState, useEffect } from 'react'
import styles from '@/styles/components/common/about.module.css'
import { aboutData } from '@/data/aboutData'
import { AboutData } from '@/types/aboutData'

export default function About() {

    const [data, setData] = useState<AboutData>(aboutData)

    return (
        <>
            <div className={styles.aboutWrap}>
                <div className={styles.aboutGridBox}>
                    <div className={styles.myPhotoContent}>
                        <figure>
                            <img src={data.myPhoto} alt="自分の写真" />
                        </figure>
                    </div>{/* 写真 */}
                    <div className={styles.myNameContent}>
                        <p>{data.myRuby}</p>
                        <p>{data.myName}</p>
                        <p>{data.mySchool}</p>
                    </div>{/* 名前などの細かい情報 */}
                    <div className={styles.myInportantContent}>
                        <p>{data.myInportant}</p>
                        <p>{data.myInportantReason}</p>
                    </div>{/* 自身が大切にしていること */}
                    <div className={styles.myCareerContent}>
                        {data.myCareer.map((v, idx) =>
                            <p key={idx}>{v}</p>
                        )}
                    </div>{/* 経歴 */}
                </div>
            </div>
        </>
    )
}