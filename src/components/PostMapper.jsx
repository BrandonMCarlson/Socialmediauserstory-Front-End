import React, { useState, useEffect } from "react";
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

const PostMapper = ({ user }) => {
  
    const addLike = async (postId) => {
        await axios
          .put(
            `http://localhost:5000/api/users/${user._id}/posts/${postId}`,
            {
              body: user.posts[0].body,
              likes: user.posts[0].likes + 1,
              disLikes: user.posts[0].disLikes,
            },
            { headers: { "x-auth-token": localStorage.getItem("token") } }
          )
          .then((res) => {
            console.log(user);
          });
      };  
  
    return (
    <div>
      <div>
        <div>
          {user.posts
            .slice(0)
            .reverse()
            .map((post, index) => (
              <div key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={catCig}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.body}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.body}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => addLike("61b05d393b63ecf6fd54f9b0")}
                      size="small"
                    >
                      {" "}
                      <FavoriteIcon />
                      {post.likes}
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PostMapper;
