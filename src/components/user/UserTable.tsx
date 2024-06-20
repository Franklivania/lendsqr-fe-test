import Table from "../table";

type UserData = {
  id: number;
  name: string;
  age: number;
  email: string;
  city: string; 
  phone: string;
};

const columns = [
  {
    title: 'Name',
    key: 'name',
    render: (data: UserData) => <span>{data.name}</span>,
  },
  {
    title: 'Age',
    key: 'age',
    render: (data: UserData) => <span>{data.age}</span>,
  },
  {
    title: 'Email',
    key: 'email',
    render: (data: UserData) => <span>{data.email}</span>,
  },
  {
    title: 'City',
    key: 'city',
    render: (data: UserData) => <span>{data.city}</span>,
  },
  {
    title: 'Phone',
    key: 'phone',
    render: (data: UserData) => <span>{data.phone}</span>,
  },
];

// Generating 20 rows of data
const data: UserData[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  age: 20 + (index % 10),
  email: `user${index + 1}@example.com`,
  city: `City ${index % 5}`,
  phone: `123-456-789${index % 10}`,
}));

export default function UserTable() {
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  )
}
