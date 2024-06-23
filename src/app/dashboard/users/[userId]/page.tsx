"use client";
import { useEffect, useState } from "react";
import { useAxiosData } from "@/api/axiosQuery";
import Typography from "@/components/Typography";
import DashboardContainer from "@/layout/dashboard";
import { User } from "@/types";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import userAvatar from "../../../../../public/images/userAvatar.svg";
import TabRouter from "@/components/userComponents/TabRouter";
import UserIdComponents from "@/components/userComponents";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@/components/button";

export default function UserId() {
  const { userId } = useParams<{ userId: string }>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "general-details";
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  const baseUrl = `${process.env.NEXT_PUBLIC_URL}/users/${userId}`;
  const { data, error, isLoading } = useAxiosData<User[]>(baseUrl);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.replace(`/dashboard/users/${userId}?tab=${tab}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const user = data?.find((item) => item.userId === userId);

  if (!user) return <div>User not found</div>;

  const addCommas = (amount: string): string => {
    return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <DashboardContainer>
      <div id="user-id">
        <section id="user-controls">
          <Typography.p onClick={() => router.back()} style={{ cursor: "pointer" }}>
            <Icon icon={"teenyicons:arrow-left-solid"} width={24} />
            Back to users
          </Typography.p>

          <div id="user-controls-header">
            <Typography.h2>User Details</Typography.h2>

            <aside>
              <Button type="button" variant="red" title="BLACKLIST USER" />
              <Button type="button" variant="secondary" title="ACTIVATE USER" />
            </aside>
          </div>
        </section>

        <section id="profile-head">
          <div id="profile-head-top">
            <Image src={userAvatar} width={50} height={50} alt={user.fullName} title={user.fullName} />
            <aside>
              <Typography.h2>{user.fullName}</Typography.h2>
              <small>{user.userId}</small>
            </aside>
            <div className="hr-line" />
            <aside>
              <Typography.p>User's Tier</Typography.p>
            </aside>
            <div className="hr-line" />
            <aside>
              <Typography.h2>₦{addCommas(user.amountInBank)}</Typography.h2>
              <small>9912345678/Providus Bank</small>
            </aside>
          </div>

          <TabRouter activeTab={activeTab} onTabChange={handleTabChange} />
        </section>

        <UserIdComponents userId={user.userId} activeTab={activeTab} user={user} />
      </div>
    </DashboardContainer>
  );
}
