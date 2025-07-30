import React from 'react';
import styles from './styles.module.css';

/**
 * OutputDisplay - Simple output display that looks like code but can't be copied
 * 
 * Usage:
 * <OutputDisplay type="success" title="Installation Complete">
 *   ✓ Dependencies setup completed successfully!
 *   ⚠️ IMPORTANT: You MUST restart your terminal
 * </OutputDisplay>
 */
const OutputDisplay = ({ 
  children, 
  title, 
  type = 'default', // 'success', 'warning', 'error', 'info', 'default'
  icon = null 
}) => {
  const getTypeClass = () => {
    switch (type) {
      case 'success': return styles.success;
      case 'warning': return styles.warning;
      case 'error': return styles.error;
      case 'info': return styles.info;
      default: return styles.default;
    }
  };

  const getDefaultIcon = () => {
    switch (type) {
      case 'success': return '✅';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      case 'info': return 'ℹ️';
      default: return '📋';
    }
  };

  return (
    <div className={`${styles.outputContainer} ${getTypeClass()}`}>
      {title && (
        <div className={styles.outputHeader}>
          <span className={styles.icon}>{icon || getDefaultIcon()}</span>
          <span className={styles.title}>{title}</span>
          <span className={styles.badge}>Output</span>
        </div>
      )}
      <div className={styles.outputBody}>
        <pre className={styles.outputText}>{children}</pre>
      </div>
    </div>
  );
};

export default OutputDisplay;