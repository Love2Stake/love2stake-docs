import React from 'react';
import CodeBlock from '@theme/CodeBlock';

/**
 * NoCodeCopy - A wrapper component that disables copy/paste for code blocks
 * 
 * Usage examples:
 * 
 * 1. Basic usage:
 * <NoCodeCopy language="bash">
 *   echo "This cannot be copied"
 * </NoCodeCopy>
 * 
 * 2. With title:
 * <NoCodeCopy language="bash" title="Example Output (Read Only)">
 *   user@hostname:~$ ./command
 *   Output that shouldn't be copied
 * </NoCodeCopy>
 * 
 * 3. With read-only indicator:
 * <NoCodeCopy language="json" showReadOnly={true}>
 *   {"example": "config"}
 * </NoCodeCopy>
 */
const NoCodeCopy = ({ 
  children, 
  language = 'text', 
  title, 
  showReadOnly = false,
  className = '',
  ...props 
}) => {
  const wrapperClass = showReadOnly ? 'read-only' : 'no-copy';
  
  return (
    <div className={`${wrapperClass} ${className}`}>
      <CodeBlock 
        language={language} 
        title={title}
        {...props}
      >
        {children}
      </CodeBlock>
    </div>
  );
};

export default NoCodeCopy;