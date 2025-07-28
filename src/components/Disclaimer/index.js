import React from 'react';
import styles from './styles.module.css';

export default function Disclaimer({ children, type = 'warning' }) {
  const getIcon = () => {
    switch (type) {
      case 'information':
        return 'ℹ️';
      case 'danger':
        return '🚨';
      case 'success':
        return '✅';
      default:
        return '⚠️';
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'information':
        return 'Information';
      case 'danger':
        return 'Warning';
      case 'success':
        return 'Success';
      default:
        return 'Disclaimer';
    }
  };

  const getDefaultContent = () => {
    switch (type) {
      case 'info':
      case 'information':
        return 'This is important information you should be aware of. Please read carefully and consider this information when making decisions.';
      case 'danger':
        return 'This action may have serious consequences. Please proceed with caution and ensure you understand the risks involved.';
      case 'success':
        return 'The operation completed successfully. You can now proceed to the next step.';
      default:
        return 'This information is provided for educational purposes only. Always do your own research and consult with professionals before making any financial decisions. We are not responsible for any losses that may occur from following this information.';
    }
  };

  // Map 'information' to 'info' for CSS class
  const cssType = type === 'information' ? 'info' : type;

  return (
    <div className={`${styles.disclaimer} ${styles[cssType]}`}>
      <div className={styles.disclaimerHeader}>
        <div className={styles.disclaimerIcon}>
          {getIcon()}
        </div>
        <div className={styles.disclaimerTitle}>
          {getTitle()}
        </div>
      </div>
      <div className={styles.disclaimerContent}>
        {children || getDefaultContent()}
      </div>
    </div>
  );
}