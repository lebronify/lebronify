"use client"

export const GlobalStyles = () => {
  return (
    <style jsx global>{`
      @keyframes border-flow {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      .animate-border-flow {
        background-size: 300% 100%;
        animation: border-flow 3s ease infinite;
      }
      
      /* Markdown styling */
      .markdown-content h1 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        color: #FFB200;
      }
      
      .markdown-content h2 {
        font-size: 1.25rem;
        font-weight: bold;
        margin-top: 0.75rem;
        margin-bottom: 0.5rem;
        color: #FFB200;
      }
      
      .markdown-content h3, .markdown-content h4, .markdown-content h5, .markdown-content h6 {
        font-size: 1.1rem;
        font-weight: bold;
        margin-top: 0.5rem;
        margin-bottom: 0.25rem;
        color: #FFB200;
      }
      
      .markdown-content p {
        margin-bottom: 0.75rem;
        white-space: pre-wrap;
      }
      
      .markdown-content ul, .markdown-content ol {
        margin-left: 1.5rem;
        margin-bottom: 0.75rem;
      }
      
      .markdown-content ul {
        list-style-type: disc;
      }
      
      .markdown-content ol {
        list-style-type: decimal;
      }
      
      .markdown-content li {
        margin-bottom: 0.25rem;
      }
      
      .markdown-content a {
        color: #FFB200;
        text-decoration: underline;
      }
      
      .markdown-content blockquote {
        border-left: 3px solid #FFB200;
        padding-left: 1rem;
        margin-left: 0;
        margin-right: 0;
        font-style: italic;
        color: #d4d4d4;
      }
      
      .markdown-content code {
        background-color: rgba(0, 0, 0, 0.3);
        padding: 0.2rem 0.4rem;
        border-radius: 0.25rem;
        font-family: monospace;
        font-size: 0.9rem;
      }
      
      .markdown-content pre {
        background-color: rgba(0, 0, 0, 0.3);
        padding: 1rem;
        border-radius: 0.5rem;
        overflow-x: auto;
        margin-bottom: 1rem;
      }
      
      .markdown-content pre code {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
      }
      
      .markdown-content table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 1rem;
      }
      
      .markdown-content th, .markdown-content td {
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 0.5rem;
        text-align: left;
      }
      
      .markdown-content th {
        background-color: rgba(255, 178, 0, 0.2);
        color: #FFB200;
      }
      
      .markdown-content tr:nth-child(even) {
        background-color: rgba(0, 0, 0, 0.2);
      }
      
      .markdown-content hr {
        border: 0;
        height: 1px;
        background: linear-gradient(to right, transparent, rgba(255, 178, 0, 0.5), transparent);
        margin: 1.5rem 0;
      }
    `}</style>
  );
};
