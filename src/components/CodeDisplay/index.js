import React from 'react';
import styles from './styles.module.css';


/**
 * CodeDisplay - Display code/output as unselectable styled text
 * 
 * Usage:
 * <CodeDisplay language="bash" title="Expected Output" copyable={false}>
 *   user@hostname:~$ ./love2automate-ada --setup-deps
 *   ✓ Dependencies setup completed successfully!
 * </CodeDisplay>
 */
const CodeDisplay = ({ 
  children, 
  language = 'text',
  title,
  copyable = false,
  showLineNumbers = false 
}) => {
  // Handle React children properly - extract text content
  const extractTextContent = (children) => {
    if (typeof children === 'string') {
      return children;
    }
    if (Array.isArray(children)) {
      return children.map(child => 
        typeof child === 'string' ? child : ''
      ).join('');
    }
    if (children && typeof children === 'object' && children.props) {
      return children.props.children || '';
    }
    return String(children || '');
  };
  
  const content = extractTextContent(children);
  const lines = content.split('\n').filter(line => line.trim() || content.includes('\n'));
  
  return (
    <div className={styles.codeContainer}>
      {title && (
        <div className={styles.codeHeader}>
          <span className={styles.language}>{language}</span>
          <span className={styles.title}>{title}</span>
          {!copyable && <span className={styles.noCopyBadge}>View Only</span>}
        </div>
      )}
      <div className={`${styles.codeBody} ${!copyable ? styles.noCopy : ''}`}>
        {showLineNumbers ? (
          <div className={styles.lineNumbersContainer}>
            <div className={styles.lineNumbers}>
              {lines.map((_, index) => (
                <div key={index} className={styles.lineNumber}>
                  {index + 1}
                </div>
              ))}
            </div>
            <div className={styles.codeContent}>
              {lines.map((line, index) => (
                <div key={index} className={styles.codeLine}>
                  {line || '\u00A0'}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <pre className={styles.codeText}>{content}</pre>
        )}
      </div>
    </div>
  );
};

export default CodeDisplay;