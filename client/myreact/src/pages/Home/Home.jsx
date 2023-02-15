import React from "react";
import './home.css'
import Flow from "../../component/HomeComponents/Flow/Flow";
import Left from "../../component/HomeComponents/LeftHome/Left";
import { useSelector } from "react-redux";
import Share from "../../component/HomeComponents/Share/Share";
import Navbar from '../../component/Navbar/Navbar'
import Tournoments from '../../component/HomeComponents/RightHome/Tournoments'
import LookingFor from '../../component/HomeComponents/RightHome/LookingFor'
import FollowList from '../../component/HomeComponents/LeftHome/FollowList'




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
        <FollowList style={{marginTop:'25px'}} userId={_id} />
      </div>
            
      {/* -----------------Middle Buradan Başlıyor --------------------------------------------------*/}

      <div className="mid">
        <Share picturePath={picture}/>
        <Flow userId={_id} />
      </div>

      {/* -----------------Right Buradan Başlıyor --------------------------------------------------*/}

      <div className="right">
        <Tournoments />
        <LookingFor />
      </div>
    </div>
    </>
  );
};

export default Home;
