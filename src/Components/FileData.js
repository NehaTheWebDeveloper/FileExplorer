// filesData.js
const filesData = [
    {
      name: 'Documents',
      type: 'folder',
      contents: [
        { name: 'Work', type: 'folder', contents: [{ name: 'Report.pdf', type: 'file' }] },
        { name: 'Personal', type: 'folder', contents: [{ name: 'Vacation.jpg', type: 'file' }] },
      ],
    },
    {
      name: 'Images',
      type: 'folder',
      contents: [
        { name: 'Nature.jpg', type: 'file' },
        { name: 'Travel', type: 'folder', contents: [{ name: 'Mountains.jpg', type: 'file' }] },
      ],
    },
    { name: 'App.js', type: 'file' },
  ];
  
  export default filesData;
  