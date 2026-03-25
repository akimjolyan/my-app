import React from 'react';
import styles from './WidgetCard.module.less';

interface WidgetCardProps {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const WidgetCard: React.FC<WidgetCardProps> = ({
  title,
  action,
  children,
  className = '',
}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {action && <div className={styles.action}>{action}</div>}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default WidgetCard;
