import React from 'react';
import styles from './Avatar.module.less';

interface AvatarProps {
  name?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  name,
  size = 'medium',
  className = '',
}) => {
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').slice(0, 2)
    : '';

  return (
    <div className={`${styles.avatar} ${styles[size]} ${className}`}>
      {initials || <span className={styles.placeholder}>👤</span>}
    </div>
  );
};

export default Avatar;
