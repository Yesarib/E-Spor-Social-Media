import React from 'react'
import User from '../../../datas/User'
import UserImage from '../../UserImage/UserImage';
import WidgetWrapper from '../../WidgetWrapper/WidgetWrapper';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme,Typography } from '@mui/material';
import '../style.css'

const Left = ({ userId, picturePath }) => {

  const [datauser] = useState(User);
  const [users,setUsers] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!users) {
    return null;
  }
  const {
    firstName,
    lastName,
    nick,
    follow,
    follower
  } = users;


  return (
    <WidgetWrapper style={{marginTop:'40px'}}>
    <div style={{display:'flex',flexDirection:'row'}}>
      {/* -----------------Left Buradan Başlıyor --------------------------------------------------*/}

      <div className="left">
        <div className="profile">
          <div onClick={() => navigate(`/profile/${userId}`)}>
            <UserImage image={picturePath} size='100px'/>
          </div>          
        </div>
        <div className="profile-info">
          <Typography variant='h4'
            color={dark}
            fontWeight='500'
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            <h4 > {nick} </h4>
          </Typography>
          <h5> {firstName} {lastName} </h5>        
        </div>
        <div >          
          <p style={{float:'left',marginTop:'30px',marginLeft:'15px',fontWeight:'200',fontSize:'14px'}}>Follow</p>
          <p style={{float:'right',marginTop:'30px',marginRight:'15px',fontWeight:'200',fontSize:'14px'}}> {follow.length} </p>
        </div>
        <div>          
          <p style={{float:'left',marginLeft:'15px',fontWeight:'200',fontSize:'14px'}}>Follower</p>
          <p style={{float:'right',marginRight:'15px',fontWeight:'200',fontSize:'14px'}}> {follower.length} </p>
        </div>
        <div className="games">
          <p style={{float:'left',marginTop:'20px',marginLeft:'15px',fontWeight:'200',fontSize:'14px'}}>Followed Games</p>
          {/* {user.games.map} */}
          {datauser.games.map((game)=>{
            return(
              <div className="games-opt"> {game} </div>
            )
          })}
        </div>
      </div>
      
    </div>
    
    </WidgetWrapper>
  )
}

export default Left