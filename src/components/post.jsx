import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TextField from "@mui/material/TextField";
import useForm from '../useForm';

export default function Post({profile}) {



  const { formValue, handleChange, handleSubmit, setFormValue } = useForm();

  return (
    <div>
        <div>
        <TextField
            className="post-text-field"
            id="post"
            label="Post Something"
            multiline
            InputLabelProps={{ shrink: true }}           
            name="aboutMe"
            disabled
          />
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