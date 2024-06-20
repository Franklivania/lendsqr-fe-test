import Typography from "@/components/Typography";
import UserInfo from "@/components/user/UserInfo";
import DashboardContainer from "@/layout/dashboard";

export default function Users() {
  return (
    <DashboardContainer id="users-display">
      <Typography.h2 id="H2">Users</Typography.h2>
      <UserInfo />
    </DashboardContainer>
  )
}
