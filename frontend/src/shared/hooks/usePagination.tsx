import { useState } from 'react';
import useDebounce from './useDebounce';

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearch = useDebounce<string>(searchValue);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return {
    currentPage,
    setCurrentPage,
    rowsPerPage,
    setRowsPerPage,
    searchValue,
    handleSearchChange,
    debouncedSearch,
  };
};
export default usePagination;
