import React from 'react';
import styles from './styles.module.css';

// Format terminal content with basic syntax highlighting
const formatTerminalContent = (content) => {
  if (!content) return '';
  
  return content
    .split('\n')
    .map(line => {
      // Command prompts (user@hostname:~$ or just $)
      if (line.match(/^[^@]*@[^:]*:[^$]*\$/)) {
        return `<span class="${styles.promptLine}">${line}</span>`;
      }
      // Success indicators
      else if (line.includes('✓') || line.includes('SUCCESS') || line.includes('FOUND')) {
        return `<span class="${styles.successLine}">${line}</span>`;
      }
      // Warning indicators
      else if (line.includes('⚠️') || line.includes('WARNING') || line.includes('IMPORTANT')) {
        return `<span class="${styles.warningLine}">${line}</span>`;
      }
      // Error indicators
      else if (line.includes('❌') || line.includes('ERROR') || line.includes('FAILED')) {
        return `<span class="${styles.errorLine}">${line}</span>`;
      }
      // Comments (lines starting with #)
      else if (line.trim().startsWith('#')) {
        return `<span class="${styles.commentLine}">${line}</span>`;
      }
      // Regular output
      else {
        return `<span class="${styles.outputLine}">${line}</span>`;
      }
    })
    .join('\n');
};

/**
 * TerminalOutput - Display terminal output as a realistic terminal window that can't be copied
 * 
 * Usage:
 * <TerminalOutput title="Expected Output" content={`user@hostname:~$ ./command
 * ✓ Success message`} />
 * 
 * Simple, clean terminal display - no types or icons needed
 */
const TerminalOutput = ({ children, content, title }) => {
  // Use content prop if provided, otherwise try to extract from children
  let terminalContent = content;
  
  if (!terminalContent && children) {
    // Handle React children - try to extract text content
    if (typeof children === 'string') {
      terminalContent = children;
    } else if (Array.isArray(children)) {
      terminalContent = children.filter(child => typeof child === 'string').join('');
    } else {
      terminalContent = String(children);
    }
  }
  
  const lines = (terminalContent || '').split('\n').filter(line => line.trim() || terminalContent.includes('\n\n'));
  
  return (
    <div className={styles.terminalContainer}>
      {title && <div className={styles.terminalTitle}>{title}</div>}
      <div className={styles.terminalWindow}>
        <div className={styles.terminalHeader}>
          <div className={styles.terminalButtons}>
            <span className={styles.closeBtn}></span>
            <span className={styles.minimizeBtn}></span>
            <span className={styles.maximizeBtn}></span>
          </div>
          <div className={styles.terminalTitleBar}>Terminal</div>
        </div>
        <div className={styles.terminalBody}>
          <pre 
            className={styles.terminalText}
            dangerouslySetInnerHTML={{ __html: formatTerminalContent(terminalContent) }}
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalOutput;