import React from "react";
import './home.css'
import Flow from "../../component/HomeComponents/Flow/Flow";
import Left from "../../component/HomeComponents/LeftHome/Left";
import { useSelector } from "react-redux";
import Share from "../../component/HomeComponents/Share/Share";
import Navbar from '../../component/Navbar/Navbar'
import Tournoments from '../../component/HomeComponents/RightHome/Tournoments'




const Home = () => {
  
  const { _id, picture } = useSelector((state) => state.user)
  console.log(picture)

  return (
    <>
    <Navbar />
    <div style={{display:'flex',flexDirection:'row'}}>

      {/* -----------------Left Buradan Başlıyor --------------------------------------------------*/}
      <div >
        <Left userId={_id} picturePath={picture}/>
      </div>
            
      {/* -----------------Middle Buradan Başlıyor --------------------------------------------------*/}

      <div className="mid">
        <Share picturePath={picture}/>
        <Flow userId={_id} />
      </div>

      {/* -----------------Right Buradan Başlıyor --------------------------------------------------*/}

      <div className="right">
        <Tournoments />
      </div>
    </div>
    </>
  );
};

export default Home;
