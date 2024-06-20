import Typography from "@/components/Typography";
import CustomInput from "@/components/custom/CustomInput";
import CustomSelect, { DropdownOption } from "@/components/custom/CustomSelect";
import UserInfo from "@/components/user/UserInfo";
import UserTable from "@/components/user/UserTable";
import DashboardContainer from "@/layout/dashboard";

export const label1: DropdownOption[] = [
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
];

export default function Users() {
  return (
    <DashboardContainer>
      <div id="users-display">
        <Typography.h2 id="H2">Users</Typography.h2>
        <CustomSelect 
          label="Onboarding"
          options={label1}
          placeholder="Say something"
          value={""}
        />

        <CustomInput 
          type="date"
          id=""
          title="Hello"
          value=""
        />
        <UserInfo />
        <UserTable />
      </div>
    </DashboardContainer>
  )
}
