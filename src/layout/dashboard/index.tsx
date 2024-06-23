"use client"
import TopNav from '@/components/custom/TopNav';
import { HTMLAttributes, PropsWithChildren, useState } from 'react'
import styles from "./dashboard.module.scss";
import SideNav from '@/components/SideNav';
import { Work_Sans } from "next/font/google"
import { Icon } from '@iconify/react/dist/iconify.js';

const work = Work_Sans({ subsets: ["latin"] })

type DashboardTypes = {
  children: PropsWithChildren;
} & HTMLAttributes<HTMLDivElement>

export default function DashboardContainer({children, ...props}:DashboardTypes) {
  const [menuActive, setMenuActive] = useState<boolean>(false)

  const handleOpenMobileMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <div className={styles.dashboard} {...props}>
      <TopNav />
      <section className={styles.dashboardContent}>
        <SideNav mobileActive={menuActive} setMobileActive={handleOpenMobileMenu} style={{flex: 1}} />
        <div className={`${styles.container} ${work.className}`}>
          <span className={styles.mobileButton} onClick={handleOpenMobileMenu}>
            <Icon 
              icon={menuActive ? "ph:x-circle" : "mdi:menu-close"}
              width={24}
            />
          </span>
          {children}
        </div>
      </section>
    </div>
  )
}
