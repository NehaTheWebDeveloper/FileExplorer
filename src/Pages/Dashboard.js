// Dashboard.js
import React from 'react';

const Dashboard = ({ selectedFile}) => {
  return (
    <div>
      <h3>File Dashboard</h3>
      {selectedFile && (
        <div>
          <h4>Selected File: {selectedFile.name}</h4>
                 <pre>{JSON.stringify(selectedFile, null, 2)}</pre>
          <p>
            {JSON.stringify.selectedFile}
          </p>
                 {/* <pre>{JSON.stringify(selectedFile, null, 2)}</pre> */}
          {/* <button onClick={() => onDelete(selectedFile)}>Delete</button>
          <button onClick={() => onRename(selectedFile)}>Rename</button> */}
          {/* Add more dashboard components and actions as needed */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
