import Typography from "../Typography";
import Image from "next/image";
import eye from "../../../public/icons/eye.svg"
import userX from "../../../public/icons/user-x-lite.svg"
import userCheck from "../../../public/icons/user-check.svg"
import { useRouter } from "next/navigation";


export default function TableItemActions({ userId }:{ userId:string }) {
  const router = useRouter()

  return (
    <div id="table-item-actions">
      <span className="action-item"
        onClick={() => router.push(`/dashboard/users/${userId}`)}
      >
        <Image src={eye} width={20} height={20} alt="" />
        View Details
      </span>
      <span className="action-item">
        <Image src={userX} width={20} height={20} alt="" />
        Blacklist User
      </span>
      <span className="action-item">
        <Image src={userCheck} width={20} height={20} alt="" />
        Activate User
      </span>
    </div>
  )
}
