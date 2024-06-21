"use client"
import { useAxiosData } from '@/api/axiosQuery';
import Table from "../table";
import { User } from '@/types';

const columns = [
  {
    title: 'Organization',
    key: 'organization',
    render: (data: User) => <span>{data.activities.organization}</span>,
  },
  {
    title: 'Username',
    key: 'username',
    render: (data: User) => <span>{data.fullName}</span>,
  },
  {
    title: 'Email',
    key: 'email',
    render: (data: User) => <span>{data.personalInfo.emailAddress}</span>,
  },
  {
    title: 'Phone Number',
    key: 'phoneNumber',
    render: (data: User) => <span>{data.personalInfo.phoneNumber}</span>,
  },
  {
    title: 'Date Joined',
    key: 'dateJoined',
    render: (data: User) => <span>{data.activities.dateJoined}</span>,
  },
  {
    title: 'Status',
    key: 'status',
    render: (data: User) => <span className={`status ${data.activities.status.toLowerCase()}`}>{data.activities.status}</span>,
  },
];

const UserTable = () => {
  const baseUrl = `${process.env.NEXT_PUBLIC_URL}`
  const { data, error, isLoading } = useAxiosData<User[]>(baseUrl);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const tableData = data || [];

  return (
    <div>
      <Table columns={columns} data={tableData} />
    </div>
  );
};

export default UserTable;