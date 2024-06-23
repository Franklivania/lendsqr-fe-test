import Typography from "@/components/Typography";
import UserInfo from "@/components/user/UserInfo";
import UserTable from "@/components/user/UserTable";
import DashboardContainer from "@/layout/dashboard";

export default function Users() {
  return (
    <DashboardContainer>
      <div id="users-display">
        <Typography.h2 id="H2">Users</Typography.h2>
        <UserInfo />
        <UserTable />
      </div>
    </DashboardContainer>
  )
}
