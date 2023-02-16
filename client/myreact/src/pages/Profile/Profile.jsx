import React, { useEffect, useState} from 'react'
import { Box, useMediaQuery  } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar'
import FollowList from '../../component/HomeComponents/LeftHome/FollowList';
import Left from '../../component/HomeComponents/LeftHome/Left';
import Flow from '../../component/HomeComponents/Flow/Flow';
import Share from '../../component/HomeComponents/Share/Share'

const Profile = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
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
    <Box >
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box >
          <Left userId={userId} picturePath={user.picture} />
          <Box m="2rem 0" />
          <FollowList userId={userId} />
        </Box>
        <Box 
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <Box m="2rem 0" />
          <Flow userId={userId} isProfile  />
        </Box>
      </Box>
    </Box>
  )
}

export default Profile