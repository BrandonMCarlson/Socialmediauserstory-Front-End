import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import useForm from '../useForm';
import axios from 'axios';

export default function Post({profile, user}) {

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
        <div>
        <TextField
            className="post-text-field"
            id="post"
            label="Post Something"
            multiline
            InputLabelProps={{ shrink: true }}           
            name="body"
            onChange={(event)=>handleChange(event)}
          />
          <button onClick={(event)=>handleSubmit(event)}>POST ME</button>
        </div>
        
        <div>
          <div>
        <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
    </Timeline>
        </div>
    </div>
    </div>
  )};