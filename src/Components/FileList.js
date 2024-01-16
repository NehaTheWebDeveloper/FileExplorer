// FileList.js
import React from 'react';
import FileItem from './FileItem';

const FileList = ({ files, onOpen, onDelete, onRename }) => {
  return (
    <div className="file-list">
      {files.map((file, index) => (
        <FileItem key={index} file={file} onOpen={onOpen} onDelete={onDelete} onRename={onRename} />
      ))}
    </div>
  );
};

export default FileList;
