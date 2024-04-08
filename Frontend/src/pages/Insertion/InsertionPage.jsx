import React, { useRef, useState } from "react";
// import img from "../../assets/Group3(1).png";
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
  // const [img, setImg] = useState(false);
  const fileInputRef = useRef(null);
  const img_prev = useRef(null);
  const [loading, setLoading] = useState(false);

  const [openWebCam, setopenWebCam] = useState(false);

  const [img, setImg] = useState("")


  const startLoading = () => {
    setLoading(true);
    img_prev.current.src=gray_img;
    setTimeout(() => {
      setLoading(false);
      img_prev.current.src=img2;
    }, 3000);

  };

  const [imageUrl, setImageUrl] = useState(null);
  const [image, setImage] = useState(null)
  const [result, setResult] = useState('');



  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImage(file)
      setResult('')
    }
  }



  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handlePredClick = async (e) => {
    e.preventDefault()
    const form = new FormData()
    form.append("user", window.localStorage.getItem("user_id"))
    form.append("image", image)
    const res = await fetch("http://127.0.0.1:8000/api/image-upload/",{
      method:"POST",

      body:form
    })
    const resJson = await res.json()
    if(resJson.status=="ok"){
      console.log(resJson.data.image)
      alert("Data sent!")
    }
    else{
      alert(resJson.error)
    }
  };


  const handlePredict = async(e)=>{
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/api/image-detect/",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        "user_id": window.localStorage.getItem("user_id")
      })
    })
    const resJson = await res.json()
    if(resJson.status=="ok"){
      setImageUrl("http://127.0.0.1:8000/"+resJson.url)
    }
    else{
      alert(resJson.error)
    }
  }

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
          value={selectedFile}
          onChange={handleFileChange}
          style={{ display: "none" }} // Hide the file input
        />
        <div className="preview" >

          <img ref={img_prev} src={imageUrl} width={920} height={920}/>
        </div>
        <ProcessingBar loading={loading} />
        <button className="button center" onClick={handlePredClick}>
          <AddCircleOutlineIcon />
          Send
        </button>
        <ProcessingBar loading={loading} />
        <button className="button center" onClick={handlePredict}>
          <OnlinePredictionIcon/>

          Predict
        </button>
      </div>
    </>
  );
}

export default InsertionPage;
