import { Suspense } from "react";
import Typography from "@/components/Typography";
import UserInfo from "@/components/user/UserInfo";
import DashboardContainer from "@/layout/dashboard";
import dynamic from "next/dynamic";
const UserTable = dynamic(() => import('@/components/user/UserTable'), { ssr: false });

export default function Users() {
  return (
    <DashboardContainer>
      <div id="users-display">
        <Typography.h2 id="H2">Users</Typography.h2>
        <UserInfo />
        <Suspense fallback={<div>Loading...</div>}>
          <UserTable />
        </Suspense>
      </div>
    </DashboardContainer>
  )
}
