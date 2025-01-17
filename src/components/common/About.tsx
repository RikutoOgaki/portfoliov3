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
                    <div>
                        <figure>
                            <img src={data.myPhoto} alt="自分の写真" />
                        </figure>
                    </div>{/* 写真 */}
                    <div>
                        <p>{data.myRuby}</p>
                        <p>{data.myName}</p>
                    </div>{/* 名前などの細かい情報 */}
                    <div>
                        <p>{data.myInportant}</p>
                        <p>{data.myInportantReason}</p>
                    </div>{/* 自身が大切にしていること */}
                    <div>
                        {data.myCareer}
                    </div>{/* 経歴 */}
                </div>
            </div>
        </>
    )
}