"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAxiosData } from '@/api/axiosQuery';
import Table from "../table";
import { User } from '@/types';
import Typography from '../Typography';
import { Icon } from '@iconify/react';

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
  }
];

const UserTable = () => {
  const defaultItemsPerPage = 100;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(defaultItemsPerPage);

  const baseUrl = `${process.env.NEXT_PUBLIC_URL}`;
  const { data, error, isLoading } = useAxiosData<User[]>(baseUrl);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page');
  const itemsParam = searchParams.get('itemsPerPage');

  useEffect(() => {
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    const items = itemsParam ? parseInt(itemsParam, 10) : defaultItemsPerPage;

    setCurrentPage(page);
    setItemsPerPage(items);
  }, [pageParam, itemsParam]);

  useEffect(() => {
    const currentUrl = `?page=${currentPage}&itemsPerPage=${itemsPerPage}`;
    if (currentUrl !== window.location.search) {
      router.push(currentUrl);
    }
  }, [currentPage, itemsPerPage, router]);

  const paginatedData = useMemo(() => {
    if (!data) return [];
    const start = (currentPage - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  const totalPages = useMemo(() => {
    if (!data) return 1;
    return Math.ceil(data.length / itemsPerPage);
  }, [data, itemsPerPage]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    if (newItemsPerPage !== itemsPerPage) {
      setItemsPerPage(newItemsPerPage);
      setCurrentPage(1); 
    }
  };

  const renderPageNumbers = useCallback(() => {
    const pageNumbers = [];
    const ellipsis = <span key="ellipsis" className="ellipsis">...</span>;

    // Handle the case with 5 or fewer pages
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`paging page-no ${currentPage === i ? 'active' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
      return pageNumbers;
    }

    // Show the first page
    pageNumbers.push(
      <button
        key={1}
        className={`paging page-no ${currentPage === 1 ? 'active' : ''}`}
        onClick={() => handlePageChange(1)}
      >
        1
      </button>
    );

    // Show ellipsis if current page is greater than 4
    if (currentPage > 4) {
      pageNumbers.push(ellipsis);
    }

    // Show pages around the current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`paging page-no ${currentPage === i ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Show ellipsis if current page is less than totalPages - 3
    if (currentPage < totalPages - 3) {
      pageNumbers.push(ellipsis);
    }

    // Show the last page
    pageNumbers.push(
      <button
        key={totalPages}
        className={`paging page-no ${currentPage === totalPages ? 'active' : ''}`}
        onClick={() => handlePageChange(totalPages)}
      >
        {totalPages}
      </button>
    );

    return pageNumbers;
  }, [currentPage, totalPages, handlePageChange]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div id='user-data-display'>
      <Table columns={columns} data={paginatedData} />

      <section className="pagination-controls">
        <aside id='display-drop-down'>
          <Typography.p>Showing</Typography.p>
          <select value={itemsPerPage} id='data-select' onChange={handleItemsPerPageChange}>
            {[10, 20, 50, 70, 100].map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <Typography.p>out of</Typography.p>
          <Typography.p>{data?.length}</Typography.p>
        </aside>

        <div className="pagination">
          <button
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className={`paging page-btn`}
          >
            <Icon icon={"carbon:chevron-left"} width={24} className='icon' />
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`page-btn paging`}
          >
            <Icon icon={"carbon:chevron-right"} width={24} className='icon' />
          </button>
        </div>
      </section>
    </div>
  );
};

export default UserTable;
