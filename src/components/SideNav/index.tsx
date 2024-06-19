import { sideItems } from "./_data"
import Image from "next/image";
import briefcase from "../../../public/icons/briefcase.svg";
import home from "../../../public/icons/home.svg";
import Typography from "../Typography";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Work_Sans } from "next/font/google"
import Link from "next/link";
import { usePathname } from "next/navigation";

const work = Work_Sans({ subsets: ["latin"] })

export default function SideNav({ ...props }) {
  
  const path = usePathname()
  const isActive = (link: string) => {
    return path === `/dashboard/${link}`;
  }

  return (
    <menu role='menubar' className={`side-nav ${work.className}`} {...props}>
      <span id="switch-org">
        <Image src={briefcase} width={0} height={0} alt="" />
        <Typography.p className={work.className}>Switch Organisation</Typography.p>
        <Icon icon={"mdi:chevron-down"} width={20} color="#213F7D" />
      </span>

      <span id="dash">
        <Image src={home} width={0} height={0} alt="Dashboard" />
        <Typography.p className={`nav-head ${work.className}`}>Dashboard</Typography.p>
      </span>

      <div role="navigation" className="navigation">
        <Typography.p className={`nav-head ${work.className}`}>CUSTOMERS</Typography.p>
        {sideItems.dashboard.map((item, idx) => (
          <Link key={idx} href={`/dashboard/${item.link}`} className={`link ${isActive(item.link) ? "active" : "link"} ${work.className}`}>
            <Image src={item.icon} width={0} height={0} alt={item.title} />
            {item.title}
          </Link>
        ))}
      </div>

      <div role="navigation" className="navigation">
        <Typography.p className={`nav-head ${work.className}`}>BUSINESSES</Typography.p>
        {sideItems.businesses.map((item, idx) => (
          <li key={idx} className={work.className}>
            <span className="list">
              <Image src={item.icon} width={0} height={0} alt={item.title} />
              {item.title}
            </span>
          </li>
        ))}
      </div>

      <div role="navigation" className="navigation">
        <Typography.p className={`nav-head ${work.className}`}>SETTINGS</Typography.p>
        {sideItems.settings.map((item, idx) => (
          <li key={idx} className={work.className}>
            <span className="list">
              <Image src={item.icon} width={0} height={0} alt={item.title} />
              {item.title}
            </span>
          </li>
        ))}
      </div>
    </menu>
  )
}
