'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      ['link'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'blockquote',
    'code-block',
    'link',
  ];

  return (
    <div className="rich-text-editor">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Write your blog post content here..."
        className="bg-white rounded-xl"
      />
      
      <style jsx global>{`
        .rich-text-editor .quill {
          background: white;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .rich-text-editor .ql-toolbar {
          background: #f8fafc;
          border: none;
          border-bottom: 2px solid #e2e8f0;
          border-radius: 12px 12px 0 0;
        }
        
        .rich-text-editor .ql-container {
          border: none;
          min-height: 400px;
          font-size: 16px;
          font-family: inherit;
        }
        
        .rich-text-editor .ql-editor {
          padding: 20px;
        }
        
        .rich-text-editor .ql-editor.ql-blank::before {
          color: #94a3b8;
          font-style: normal;
        }
      `}</style>
    </div>
  );
}