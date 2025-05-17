import React from 'react';
import styles from '@/components/sections/styles.module.css';

interface PaginationProps {
  currentPage: number;
  hasMore: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  hasMore,
  onPrevious,
  onNext
}) => {
  return (
    <div className="flex justify-center items-center mt-[100px] mb-[50px]">
      <button 
        onClick={onPrevious} 
        disabled={currentPage === 1}
        className={`${styles.original_btn} mr-4 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Previous
      </button>
      
      <span className="px-8 py-4 mx-2 border border-[#dcdcdc] font-medium">
        {currentPage}
      </span>
      
      <button 
        onClick={onNext} 
        disabled={!hasMore}
        className={`${styles.original_btn} ${!hasMore ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;