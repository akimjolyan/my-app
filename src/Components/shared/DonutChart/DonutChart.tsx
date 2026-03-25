import React from 'react';
import styles from './DonutChart.module.less';

interface DonutChartProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label?: string;
  sublabel?: string;
}

const DonutChart: React.FC<DonutChartProps> = ({
  percentage,
  size = 120,
  strokeWidth = 12,
  color = '#22c55e',
  label,
  sublabel,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={styles.container} style={{ width: size, height: size }}>
      <svg className={styles.chart} width={size} height={size}>
        <circle
          className={styles.background}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className={styles.progress}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ stroke: color }}
        />
      </svg>
      <div className={styles.label}>
        {label && <span className={styles.labelText}>{label}</span>}
        {sublabel && <span className={styles.sublabelText}>{sublabel}</span>}
      </div>
    </div>
  );
};

export default DonutChart;
