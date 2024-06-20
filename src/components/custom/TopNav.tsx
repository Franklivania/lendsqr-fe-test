import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import icon from "../../../public/images/icon.svg";
import SearchBar from "../custom/SearchBar";
import Typography from "../Typography";
import { Icon } from "@iconify/react";
import avatar from "../../../public/images/avatar.svg";
import { Work_Sans } from "next/font/google"

const work = Work_Sans({ subsets: ["latin"] })

export default function TopNav({ ...props }) {
  return (
    <div role="menubar" id="top-nav" {...props}>
      <div id="image-view">
        <Image src={logo} className="logo" width={0} height={0} alt="Lendsqr" title="Lendsqr" />
        <Image src={icon} className="icon" width={0} height={0} alt="Lendsqr" title="Lendsqr" />
      </div>

      <SearchBar />

      <section className="profile">
        <Typography.p id="typo">Docs</Typography.p>
        <Icon icon={"nimbus:notification"} width={26} color="#213F7D" />

        <aside>
          <Image src={avatar} className="image" width={0} height={0} alt="Adeji" title="Adeji" />
          <Typography.h4 className={work.className}>Adedeji</Typography.h4>
          <Icon icon={"mdi:caret-down"} width={24} color="#213F7D" />
        </aside>
      </section>
    </div>
  )
}
