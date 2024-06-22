"use client";
import { ChangeEvent, useState } from "react";
import CustomSelect from "../custom/CustomSelect";
import CustomInput from "../custom/CustomInput";
import Button from "../button";
import { organisationMap, statusMap } from "./_data";
import { User } from "@/types";

type TableHeadSortProps = {
  onSort: (key: keyof User, direction: 'ascending' | 'descending') => void;
};

type FormState = {
  organisation: string;
  username: string;
  email: string;
  date: string;
  phone: string;
  status: string;
};

export default function TableHeadSort({ onSort }: TableHeadSortProps) {
  const [formState, setFormState] = useState<FormState>({
    organisation: '',
    username: '',
    email: '',
    date: '',
    phone: '',
    status: '',
  });

  const handleFilter = () => {
    if (formState.organisation) onSort('activities.organization' as keyof User, 'ascending');
    if (formState.username) onSort('fullName', 'ascending');
    if (formState.email) onSort('personalInfo.emailAddress' as keyof User, 'ascending');
    if (formState.date) onSort('activities.dateJoined' as keyof User, 'ascending');
    if (formState.phone) onSort('personalInfo.phoneNumber' as keyof User, 'ascending');
    if (formState.status) onSort('activities.status' as keyof User, 'ascending');
  };

  return (
    <div id="table-head-sort-container">
      <form onSubmit={(e) => { e.preventDefault(); handleFilter(); }}>
        <CustomSelect
          label="Organization"
          placeholder="Select"
          options={organisationMap}
          value={formState.organisation}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setFormState({ ...formState, organisation: e.target.value })}
        />
        <CustomInput
          type="text"
          id="username"
          title="Username"
          value={formState.username}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFormState({ ...formState, username: e.target.value })}
        />
        <CustomInput
          type="email"
          id="email"
          title="Email"
          value={formState.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFormState({ ...formState, email: e.target.value })}
        />
        <CustomInput
          type="date"
          id="date"
          title="Date"
          value={formState.date}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFormState({ ...formState, date: e.target.value })}
        />
        <CustomInput
          type="string"
          id="phone"
          title="Phone Number"
          value={formState.phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFormState({ ...formState, phone: e.target.value })}
        />
        <CustomSelect
          label="Status"
          options={statusMap}
          placeholder="Select"
          value={formState.status}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setFormState({ ...formState, status: e.target.value })}
        />
        <section id="form-actions">
          <Button type="button" variant="blue" title="Reset" onClick={() => setFormState({ organisation: '', username: '', email: '', date: '', phone: '', status: '' })} />
          <Button type="submit" variant="primary" title="Filter" />
        </section>
      </form>
    </div>
  );
}
