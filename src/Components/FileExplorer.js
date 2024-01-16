
import React, { useState } from 'react';
import FileList from './FileList';
import filesData from './FileData';
import Dashboard from '../Pages/Dashboard';

const FileExplorer = () => {
  const [files, setFiles] = useState(filesData);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOpen = (file) => {
    // Implement file opening logic
    console.log('Opening file:', file.name);
    setSelectedFile(file);
  };

  const handleDelete = (fileToDelete) => {
    // Implement file/folder deletion logic
    const updatedFiles = files.map((file) =>
      file.name === fileToDelete.name && file.type === fileToDelete.type
        ? { ...file, deleted: true }
        : file
    );
    setFiles(updatedFiles);
    setSelectedFile(null); // Clear selected file details
  };

  const handleRename = (fileToRename) => {
    // Implement file/folder renaming logic
    const updatedFiles = files.map((file) =>
      file.name === fileToRename.name && file.type === fileToRename.type
        ? { ...file, name: prompt('Enter a new name:', file.name) || file.name }
        : file
    );
    setFiles(updatedFiles);
  };

  const filteredFiles = files.filter((file) => !file.deleted);

  return (
    <div className="flex">
      <div className="">
        <h2>File Explorer</h2>
        <FileList files={filteredFiles} onOpen={handleOpen} onDelete={handleDelete} onRename={handleRename} />
      </div>
      {selectedFile && (
        <div className="file-details">
          <h2>File Details</h2>
          <Dashboard selectedFile={selectedFile} onDelete={handleDelete} onRename={handleRename} />
          {/* <pre>{JSON.stringify(selectedFile, null, 2)}</pre> */}
        </div>
      )}
    </div>
  );
};

export default FileExplorer;


