import React from 'react';
import styles from './styles.module.css';

/**
 * OutputDisplay - Simple output display that looks like code but can't be copied
 * 
 * Usage:
 * <OutputDisplay title="Installation Complete">
 *   ✓ Dependencies setup completed successfully!
 *   ⚠️ IMPORTANT: You MUST restart your terminal
 * </OutputDisplay>
 */
const OutputDisplay = ({ 
  children, 
  title
}) => {
  return (
    <div className={styles.outputContainer}>
      {title && (
        <div className={styles.outputHeader}>
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