// src/components/Aboutme.js
import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import { Typography, Paper } from '@mui/material';
import './Aboutme.css'; // Custom styles

const timelineData = [
  {
    title: '2017-2021',
    subtitle: 'Bachelors of Computer Engineering',
    description: 'I gained a deep understanding of core concepts such as Data Structures and Algorithms (DSA), which sharpened my problem-solving skills. I also explored the intricacies of computer networks and architecture, understanding how systems communicate and function at a hardware level. My studies included analytics and data interpretation, which paved the way for my interest in data science.',
  },
  {
    title: '2022- 2024',
    subtitle: 'Master of Information Technology',
    description: 'I focused on advanced concepts in software development, cloud computing, and data science. This program helped me enhance my skills in system design, cloud architectures, and deploying machine learning solutions. Additionally, I explored the latest technologies in artificial intelligence, gaining hands-on experience in developing scalable applications. These studies have significantly broadened my technical expertise and prepared me for complex real-world challenges.',
  },
  {
    title: '2024',
    subtitle: 'Software Engineering Intern at Psych Press',
    description: 'I worked on backend development, focusing on tasks related to visual memory evaluation. My responsibilities included API integration, developing features using C#, and managing forms through SurveyJS. I gained hands-on experience in CI/CD, solution delivery, and working with Azure DevOps and Swagger UI, contributing to seamless integration and deployment processes. This role helped me enhance my skills in software development and team collaboration.',
  },
];

const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <h2 className="timeline-title">My Journey</h2>
      <Timeline position="alternate">
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography className="MuiTypography-root" variant="body2" color="text.secondary">
                {/* Optional date or description */}
              </Typography>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot className="timeline-dot" color="primary" />
              {index < timelineData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent className="MuiTimelineContent-root">
              <Paper elevation={3} className="timeline-paper">
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="subtitle1" color="text.secondary">{item.subtitle}</Typography> {/* Subtitle added */}
                <Typography>{item.description}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Aboutme;
