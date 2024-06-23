"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAxiosData } from '@/api/axiosQuery';
import Table from "../table";
import { User } from '@/types';
import Typography from '../Typography';
import { Icon } from '@iconify/react';
import TableHeadSort from '../table/TableHeadSort';
import TableItemActions from '../table/TableItemActions';

type SortConfig = {
  key: keyof User | '';
  direction: 'ascending' | 'descending';
};

export default function UserTable() {
  const defaultItemsPerPage = 100;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: '', direction: 'ascending' });
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const sortContainerRef = useRef<HTMLDivElement | null>(null);
  const [actionUserId, setActionUserId] = useState<string | null>(null);
  const actionContainerRef = useRef<HTMLDivElement | null>(null);
  const [actionPosition, setActionPosition] = useState<{ top: number, left: number } | null>(null);

  const baseUrl = `${process.env.NEXT_PUBLIC_URL}`;
  const { data, error, isLoading } = useAxiosData<User[]>(baseUrl);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page');
  const itemsParam = searchParams.get('itemsPerPage');

  useEffect(() => {
    setCurrentPage(pageParam ? parseInt(pageParam, 10) : 1);
    setItemsPerPage(itemsParam ? parseInt(itemsParam, 10) : defaultItemsPerPage);
  }, [pageParam, itemsParam]);

  useEffect(() => {
    router.push(`?page=${currentPage}&itemsPerPage=${itemsPerPage}`);
  }, [currentPage, itemsPerPage, router]);

  const sortedData = useMemo(() => {
    if (!data || !sortConfig.key) return data || [];
    const sorted = [...data];
    sorted.sort((a, b) => {
      const aValue = a[sortConfig.key as keyof User];
      const bValue = b[sortConfig.key as keyof User];
      if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [data, sortConfig]);

  const paginatedData = useMemo(() => {
    if (!sortedData) return [];
    const start = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(start, start + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage]);

  const totalPages = useMemo(() => data ? Math.ceil(data.length / itemsPerPage) : 1, [data, itemsPerPage]);

  const handlePageChange = useCallback((page: number) => setCurrentPage(page), []);

  const handleItemsPerPageChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  }, []);

  const handleSort = useCallback((key: keyof User, direction: 'ascending' | 'descending') => {
    setSortConfig({ key, direction });
  }, []);

  const renderPageNumbers = useCallback(() => {
    const pageNumbers = [];
    const ellipsis = <span key="ellipsis" className="ellipsis">...</span>;

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

    pageNumbers.push(
      <button
        key={1}
        className={`paging page-no ${currentPage === 1 ? 'active' : ''}`}
        onClick={() => handlePageChange(1)}
      >
        1
      </button>
    );

    if (currentPage > 4) {
      pageNumbers.push(ellipsis);
    }

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

    if (currentPage < totalPages - 3) {
      pageNumbers.push(ellipsis);
    }

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

  const handleHeaderClick = useCallback(() => {
    setIsSortOpen(prev => !prev);
  }, []);

  const handleActionClick = useCallback((userId: string) => {
    setActionUserId(prev => (prev === userId ? null : userId));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sortContainerRef.current && !sortContainerRef.current.contains(event.target as Node)
      ) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutsideAction = (event: MouseEvent) => {
      if (
        actionContainerRef.current && !actionContainerRef.current.contains(event.target as Node)
      ) {
        setActionUserId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutsideAction);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideAction);
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const columns = [
    { title: 'Organization', key: 'organization', render: (data: User) => <span>{data.activities.organization}</span> },
    { title: 'Username', key: 'username', render: (data: User) => <span>{data.fullName}</span> },
    { title: 'Email', key: 'email', render: (data: User) => <span>{data.personalInfo.emailAddress}</span> },
    { title: 'Phone Number', key: 'phoneNumber', render: (data: User) => <span>{data.personalInfo.phoneNumber}</span> },
    { title: 'Date Joined', key: 'dateJoined', render: (data: User) => <span>{data.activities.dateJoined}</span> },
    { title: 'Status', key: 'status', render: (data: User) => <span className={`status ${data.activities.status.toLowerCase()}`}>{data.activities.status}</span> },
    {
      title: '', key: 'actions', render: (data: User) => (
        <span onClick={() => handleActionClick(data.userId)} className='dots'>
          <Icon icon={"mage:dots"} width={24} color='#545F7D' />

          {actionUserId === data.userId && (
            <div ref={actionContainerRef}>
              <TableItemActions userId={actionUserId} />
            </div>
          )}
        </span>
      )
    },
  ];

  return (
    <div id='user-data-display'>
      <Table
        columns={columns.map((col) =>
          col.key === 'actions'
            ? { ...col, render: (data: User) => col.render(data) }
            : col
        )}
        data={paginatedData}
        onHeaderClick={handleHeaderClick}
      />

      {isSortOpen && (
        <div ref={sortContainerRef}>
          <TableHeadSort onSort={handleSort} />
        </div>
      )}

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
