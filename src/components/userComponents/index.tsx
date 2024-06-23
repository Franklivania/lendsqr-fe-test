import GeneralDetails from "./GeneralDetails";
import { User } from "@/types";

interface UserIdComponentsProps {
  userId: string;
  activeTab: string;
  user: User;
}

export default function UserIdComponents({ userId, activeTab, user }: UserIdComponentsProps) {
  return (
    <div id="user-id-display">
      {activeTab === "general-details" && <GeneralDetails user={user} />}
    </div>
  );
}
