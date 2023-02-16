import React, { useEffect, useState} from 'react'
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar'
import FollowList from '../../component/HomeComponents/LeftHome/FollowList';
import Left from '../../component/HomeComponents/LeftHome/Left';
import Post from '../../component/HomeComponents/Posts/Post';
import Share from '../../component/HomeComponents/Share/Share'

const Profile = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        gap="2rem"
        justifyContent="center"
      >
        <Box >
          <Left userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <FollowList userId={userId} />
        </Box>
        <Box>
          <Share picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <Post userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  )
}

export default Profile