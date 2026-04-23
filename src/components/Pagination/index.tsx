'use client';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { NavButton, PageButton, PaginationContainer } from './styles';

export const ITEMS_PER_PAGE = 10;
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const pages: number[] = [];
    const maxVisible = 5;

    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <PaginationContainer>
      <NavButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <FiChevronLeft size={18} />
      </NavButton>

      {visiblePages[0] > 1 && (
        <>
          <PageButton $active={currentPage === 1} onClick={() => onPageChange(1)}>
            1
          </PageButton>
          {visiblePages[0] > 2 && (
            <PageButton $active={false} disabled>
              …
            </PageButton>
          )}
        </>
      )}

      {visiblePages.map(page => (
        <PageButton
          key={page}
          $active={currentPage === page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <PageButton $active={false} disabled>
              …
            </PageButton>
          )}
          <PageButton
            $active={currentPage === totalPages}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </PageButton>
        </>
      )}

      <NavButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <FiChevronRight size={18} />
      </NavButton>
    </PaginationContainer>
  );
};

export default Pagination;
