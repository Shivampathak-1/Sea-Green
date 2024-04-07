import React, { useRef, useState } from "react";
import img from "../../assets/Group3(1).png";
import img1 from "../../assets/Group2(1).png";
import img2 from "../../assets/outputex.jpg";
import gray_img from "../../assets/gray_img.jpg"
import "./InsertionPage.css";
import AddIcon from '@mui/icons-material/Add';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import ProcessingBar from '../../component/Proccessbar/Proccessbar.jsx';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Webcam  from "react-webcam";

{
  /* <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <button onClick={handlePredict}>Predict</button> */
}

function InsertionPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [Choose, setChoose] = useState(false);
  const fileInputRef = useRef(null);
  const img_prev = useRef(null);
  const [loading, setLoading] = useState(false);
  const [openWebCam, setopenWebCam] = useState(false);

  const startLoading = () => {
    setLoading(true);
    img_prev.current.src=gray_img;
    setTimeout(() => {
      setLoading(false);
      img_prev.current.src=img2;
    }, 3000);

  };
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handlePredClick = () => {
    startLoading()
    if (selectedFile) {
      // Perform file upload logic here
      console.log("Uploading file:", selectedFile);
      // You can use FormData to upload the file via API
      // const formData = new FormData();
      // formData.append('file', selectedFile);
      // axios.post('/upload', formData);
    } else {
      console.log("Error");
    }
  };

  const handleWebcam = () => {
    if(openWebCam){
        setopenWebCam(false);
    }else{
    setopenWebCam(true);
    }
    
  };

  return (
    <>
       <button onClick={handleWebcam} style={{marginTop:"3vmax",marginLeft:"2vmax"}}><CameraAltIcon/></button> 
       {openWebCam && <Webcam />}
      <div className="button-container">
        <button className="button" onClick={handleButtonClick}>
          <AddIcon/>
          Insert
        </button>
        <input
          ref={fileInputRef}
          className="file-input"
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }} // Hide the file input
        />
        <div className="preview" >
          <img ref={img_prev} src={selectedFile} alt="" width={920} height={920}/>
        </div>
        <ProcessingBar loading={loading} />
        <button className="button center" onClick={handlePredClick}>
          <OnlinePredictionIcon/>
          Predict
        </button>
      </div>
    </>
  );
}

export default InsertionPage;
