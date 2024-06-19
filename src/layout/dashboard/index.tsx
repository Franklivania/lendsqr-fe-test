"use client"
import TopNav from '@/components/custom/TopNav';
import { HTMLAttributes, PropsWithChildren } from 'react'
import styles from "./dashboard.module.scss";
import SideNav from '@/components/SideNav';
import { Work_Sans } from "next/font/google"

const work = Work_Sans({ subsets: ["latin"] })

type DashboardTypes = {
  children: PropsWithChildren;
} & HTMLAttributes<HTMLDivElement>

export default function DashboardContainer({children, ...props}:DashboardTypes) {
  return (
    <div className={styles.dashboard} {...props}>
      <TopNav />
      <section>
        <SideNav style={{flex: 1}} />
        <div style={{flex: 4}} className={`${styles.container} ${work.className}`}>{children}</div>
      </section>
    </div>
  )
}
