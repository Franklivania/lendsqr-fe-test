import { sideItems } from "./_data";
import Image from "next/image";
import briefcase from "../../../public/icons/briefcase.svg";
import home from "../../../public/icons/home.svg";
import Typography from "../Typography";
import { Icon } from "@iconify/react";
import { Work_Sans } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import signout from "../../../public/icons/sign-out.svg";
import { HTMLAttributes, useEffect, useRef } from "react";
import logo from "../../../public/images/logo.svg"

type SideBarProps = {
  mobileActive: boolean;
  setMobileActive: (mobileActive: boolean) => void;
} & HTMLAttributes<HTMLMenuElement>;

const work = Work_Sans({ subsets: ["latin"] });

export default function SideNav({ mobileActive = false, setMobileActive, ...props }: SideBarProps) {
  const sideBarRef = useRef<HTMLMenuElement | null>(null);

  const path = usePathname();
  const isActive = (link: string) => path.startsWith(`/dashboard/${link}`);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sideBarRef.current && !sideBarRef.current.contains(e.target as Node)) {
        setMobileActive(false);
      }
    };

    if (mobileActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileActive, setMobileActive]);

  return (
    <menu
      role="menubar"
      ref={sideBarRef}
      className={`side-nav ${work.className} ${mobileActive ? "mobile-active" : ""}`}
      {...props}
    >
      {mobileActive && <Image src={logo} width={0} height={0} id="m-img" alt="Lendsqr logo" title="Lendsqr" />}

      <span id="switch-org">
        <Image src={briefcase} width={24} height={24} alt="Switch Organisation" />
        <Typography.p className={work.className}>Switch Organisation</Typography.p>
        <Icon icon="mdi:chevron-down" width={20} color="#213F7D" />
      </span>

      <span id="dash">
        <Image src={home} width={24} height={24} alt="Dashboard" />
        <Typography.p className={`nav-head ${work.className}`}>Dashboard</Typography.p>
      </span>

      <div role="navigation" className="navigation">
        <Typography.p className={`nav-head ${work.className}`}>CUSTOMERS</Typography.p>
        {sideItems.dashboard.map((item, idx) => (
          <Link key={idx} href={`/dashboard/${item.link}`} className={`link ${isActive(item.link) ? "active" : ""}`}>
            <Image src={item.icon} width={24} height={24} alt={item.title} />
            {item.title}
          </Link>
        ))}
      </div>

      <ul role="list" className="navigation">
        <Typography.p className={`nav-head ${work.className}`}>BUSINESSES</Typography.p>
        {sideItems.businesses.map((item, idx) => (
          <li key={idx} className="list">
            <Image src={item.icon} width={24} height={24} alt={item.title} />
            {item.title}
          </li>
        ))}
      </ul>

      <ul role="list" className="navigation">
        <Typography.p className={`nav-head ${work.className}`}>SETTINGS</Typography.p>
        {sideItems.settings.map((item, idx) => (
          <li key={idx} className="list">
            <Image src={item.icon} width={24} height={24} alt={item.title} />
            {item.title}
          </li>
        ))}
      </ul>

      <ul className="navigation logout">
        <Link href="/" className="list">
          <Image src={signout} width={24} height={24} alt="Logout" />
          Logout
        </Link>
        <small>v1.2.0</small>
      </ul>
    </menu>
  );
}
