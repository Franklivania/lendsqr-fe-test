import Image from "next/image";
import { generalInfo } from "./_data";
import Typography from "../Typography";


export default function UserInfo() {
  return (
    <div id="user-info-display">
      {generalInfo.map((item, idx) => (
        <div key={idx} className={`user-info-container`}>
          <span className={`user-icon-container ${item.color}`}>
            <Image src={item.icon} width={24} height={24} alt={item.title} />
          </span>
          <Typography.p>{item.title}</Typography.p>
          <Typography.h2>{item.count}</Typography.h2>
        </div>
      ))}
    </div>
  )
}
