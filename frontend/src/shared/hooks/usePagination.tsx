import { useCallback, useState } from 'react';
import useDebounce from './useDebounce';

const PAGINATION_OBJECT = {
  currentPage: 1,
  rowsPerPage: 10,
  searchValue: '',
  pagesCount: 0,
};

const usePagination = () => {
  const [paginationObject, setPaginationObject] = useState(PAGINATION_OBJECT);
  const debouncedSearch = useDebounce<string>(paginationObject.searchValue);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaginationObject((prevValues) => ({
      ...prevValues,
      searchValue: event.target.value,
    }));
  };

  const setCount = useCallback((count: number) => {
    setPaginationObject((prevValues) => ({
      ...prevValues,
      pagesCount: count,
    }));
  }, []);

  const handleSetCurrentPage = useCallback(
    (event: React.ChangeEvent<unknown>, currentPage: number) => {
      setPaginationObject((prevValues) => ({
        ...prevValues,
        currentPage: currentPage,
      }));
    },
    []
  );

  return {
    paginationObject,
    handleSearchChange,
    debouncedSearch,
    setCount,
    handleSetCurrentPage,
  };
};
export default usePagination;
