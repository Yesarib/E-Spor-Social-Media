import React, { useState } from "react";
import './home.css'
import User from '../../datas/User'
import Flow from "../../component/Flow/Flow";
const Home = () => {

  const [user] = useState(User);
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      {/* -----------------Left Buradan Başlıyor --------------------------------------------------*/}

      <div className="left">
        <div className="profile">
          <div className="profile-circle">
            {/* <img src="" alt="" /> */}
          </div>          
        </div>
        <div className="profile-info">
          <h4 > {user.nick} </h4>
          <h5> {user.name } </h5>        
        </div>
        <div >          
          <p style={{float:'left',marginTop:'30px',marginLeft:'15px',fontWeight:'200',fontSize:'14px'}}>Follow</p>
          <p style={{float:'right',marginTop:'30px',marginRight:'15px',fontWeight:'200',fontSize:'14px'}}> {user.follow} </p>
        </div>
        <div>          
          <p style={{float:'left',marginLeft:'15px',fontWeight:'200',fontSize:'14px'}}>Follower</p>
          <p style={{float:'right',marginRight:'15px',fontWeight:'200',fontSize:'14px'}}> {user.follower} </p>
        </div>
        <div className="games">
          <p style={{float:'left',marginTop:'20px',marginLeft:'15px',fontWeight:'200',fontSize:'14px'}}>Followed Games</p>
          {/* {user.games.map} */}
          {user.games.map((game)=>{
            return(
              <div className="games-opt"> {game} </div>
            )
          })}
          {/* <div style={{fontWeight:'200',fontSize:'14px'}} className="games-opt">VALORANT</div>
          <div style={{fontWeight:'200',fontSize:'14px'}} className="games-opt">PUBG: Battlegrounds</div>
          <div style={{fontWeight:'200',fontSize:'14px'}} className="games-opt">Apex Legends</div> */}
        </div>
      </div>
      
      {/* -----------------Middle Buradan Başlıyor --------------------------------------------------*/}

      <div className="mid">
        <Flow />
      </div>

      {/* -----------------Right Buradan Başlıyor --------------------------------------------------*/}

      <div className="right">
        <div className="tournament">
          <h5 >Upcoming Tournaments</h5>
          <div className="tournament-info">
            <div >
              <p style={{float:'left',marginLeft:'15px'}}>PUBG: Battlegrounds</p>
              <p style={{display:'flex',float:'right',marginRight:'20px'}}>S Tier</p>
            </div>
            <div>
              <p style={{float:'left',marginLeft:'15px'}}>PUBG: Battlegrounds</p>
              <p style={{display:'flex',float:'right',marginRight:'20px'}}>A Tier</p>
            </div>
            <div>
              <p style={{float:'left',marginLeft:'15px'}}>Apex Legends</p>
              <p style={{display:'flex',float:'right',marginRight:'20px'}}>S Tier</p>
            </div>
            
          </div>
        </div>
        <div className="teams">
          <h5 style={{marginLeft:'15px',marginTop:'40px'}}>Looking For Team</h5>
          <div className="teams-info">
            <div>
              <p style={{float:'left',marginLeft:'15px'}}>Thunder</p>
              <p style={{display:'flex',float:'right',marginRight:'20px'}}>PUBG: Battlegrounds</p>
            </div>
            <div>
              <p style={{float:'left',marginLeft:'15px'}}>PULSE</p>
              <p style={{display:'flex',float:'right',marginRight:'20px'}}>Apex Legends</p>
            </div>
            <div>
              <p style={{float:'left',marginLeft:'15px'}}>Silver Ferms</p>
              <p style={{display:'flex',float:'right',marginRight:'20px'}}>Apex Legends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
