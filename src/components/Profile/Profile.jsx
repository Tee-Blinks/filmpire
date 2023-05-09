import React,{useEffect} from 'react'
import { Typography,Button, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { ExitToApp, Favorite } from '@mui/icons-material'
import {userSelector} from '../../Features/Auth'
import MovieInfo from '../MovieInfo/MovieInfo'

const Profile = () => {
  const {user} = useSelector(userSelector)
  console.log(user)
  const logout = ( ) =>{
    localStorage.clear() 
    window.location.href ='/'
  }

  return (

  <Box>
  
    <Box display='flex' justifyContent='space-between'>
      <Typography variant='h4' gutterBottom>My Profile</Typography>
    <Button color='inherit' onClick={logout}>
     Logout &nbsp; <ExitToApp/>
    </Button>
    </Box>
    {!Favorite.length ?
    <Typography varaint='h5'>
      Add favorite or  some watchlist  movies to see here!
    </Typography>
    :(
      <Box>
        favorite movies
      </Box>
    )
    }
    
  </Box>
  );
}

export default Profile