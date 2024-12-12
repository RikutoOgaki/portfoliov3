'use client'
import { ReactNode } from "react"
import style from '@/styles/components/template/flame.module.css'

type Props = {
  children: ReactNode
}

export default function Flame({ children }: Props) {
  return (
    <>
      <div className={style.flameWrap}>
        {children}
      </div>
    </>
  )
}
