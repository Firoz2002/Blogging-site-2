import React from 'react';
import styles from './styles.module.css';

interface LoadingStateProps {
  message?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = "Loading..." 
}) => {
  return (
    <div className="text-center py-20">
      <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-black mb-6"></div>
      <p className={styles.post_content}>{message}</p>
    </div>
  );
};

export default LoadingState;