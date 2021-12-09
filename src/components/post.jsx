import * as React from 'react';
import PostMapper from './PostMapper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import useForm from '../useForm';
import axios from 'axios';
import "./styles/Post.css";
import catCig from "../images/cat-cig.jpg";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { usePreviousProps } from '@mui/utils';

export default function Post({profile, user, setUser}) {

const createPost = async () => {
  axios
    .post(`http://localhost:5000/api/users/${user._id}/posts`, {
      body: formValue.body,
    },
    { headers: { 'x-auth-token': localStorage.getItem('token') } })
    .then((res)=> {
      document.getElementById('post').value = ''
    }).catch((error) => console.log(error));
  }



  const { formValue, handleChange, handleSubmit, setFormValue } = useForm(createPost);

  return (
    <div>
        <div className="posts-text">
        <TextField
            className="post-text-field"
            id="post"
            label="Post Something"
            multiline
            InputLabelProps={{ shrink: true }}           
            name="body"
            onChange={(event)=>handleChange(event)}
          />
          <SendIcon fontSize="large" onClick={(event)=>handleSubmit(event)} className="add-post-button our-button " type="subbmit" onClick={(event)=>handleSubmit(event)}/>
        </div>
        <div>
          <div>
            <PostMapper user={user}/>
        </div>
    </div>
    </div>
  )};