import React, { useState } from 'react';

function InsertionPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Perform file upload logic here
      console.log('Uploading file:', selectedFile);
      // You can use FormData to upload the file via API
      // const formData = new FormData();
      // formData.append('file', selectedFile);
      // axios.post('/upload', formData);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default InsertionPage;
