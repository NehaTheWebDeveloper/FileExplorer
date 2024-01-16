import React, { useState } from 'react';
import { FiFolder, FiFile, FiChevronDown, FiChevronRight, FiEdit, FiTrash2 } from 'react-icons/fi';
import FileList from './FileList';

const FileItem = ({ file, onOpen, onDelete, onRename }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    if (file.type === 'folder') {
      setExpanded(!isExpanded);
    } else {
      onOpen && onOpen(file);
    }
  };

  return (
    <div className="flex flex-col">
      <div onClick={toggleExpand} className="flex items-center gap-3 ">
        {file.type === 'folder' && (isExpanded ? <FiChevronDown className=''/> : <FiChevronRight />)}
        {file.type === 'folder' ? <FiFolder /> : <FiFile />}
        <span className="p-2 cursor-pointer w-28">{file.name}</span>
        <div className="flex items-center gap-2">
        <FiEdit className="action-icon" onClick={() => onRename && onRename(file)} />
        <FiTrash2 className="action-icon" onClick={() => onDelete && onDelete(file)} />
      </div>
      </div>
     
      {isExpanded && file.type === 'folder' && (
        <div className="ml-4">
          {file.contents && (
            <FileList files={file.contents} onOpen={onOpen} onDelete={onDelete} onRename={onRename} />
          )}
        </div>
      )}
    </div>
  );
};

export default FileItem;
