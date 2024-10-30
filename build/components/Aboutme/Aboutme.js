// src/components/Aboutme.js
import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import { Typography, Paper } from '@mui/material';
import './Aboutme.css'; // Custom styles

const timelineData = [{
  title: '2017-2021',
  subtitle: 'Bachelors of Computer Engineering',
  description: 'I gained a deep understanding of core concepts such as Data Structures and Algorithms (DSA), which sharpened my problem-solving skills. I also explored the intricacies of computer networks and architecture, understanding how systems communicate and function at a hardware level. My studies included analytics and data interpretation, which paved the way for my interest in data science.'
}, {
  title: '2022- 2024',
  subtitle: 'Master of Information Technology',
  description: 'I focused on advanced concepts in software development, cloud computing, and data science. This program helped me enhance my skills in system design, cloud architectures, and deploying machine learning solutions. Additionally, I explored the latest technologies in artificial intelligence, gaining hands-on experience in developing scalable applications. These studies have significantly broadened my technical expertise and prepared me for complex real-world challenges.'
}, {
  title: '2024',
  subtitle: 'Software Engineering Intern at Psych Press',
  description: 'I worked on backend development, focusing on tasks related to visual memory evaluation. My responsibilities included API integration, developing features using C#, and managing forms through SurveyJS. I gained hands-on experience in CI/CD, solution delivery, and working with Azure DevOps and Swagger UI, contributing to seamless integration and deployment processes. This role helped me enhance my skills in software development and team collaboration.'
}];
const Aboutme = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "aboutme-container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "timeline-title"
  }, "My Journey"), /*#__PURE__*/React.createElement(Timeline, {
    position: "alternate"
  }, timelineData.map((item, index) => /*#__PURE__*/React.createElement(TimelineItem, {
    key: index
  }, /*#__PURE__*/React.createElement(TimelineOppositeContent, null, /*#__PURE__*/React.createElement(Typography, {
    className: "MuiTypography-root",
    variant: "body2",
    color: "text.secondary"
  })), /*#__PURE__*/React.createElement(TimelineSeparator, null, /*#__PURE__*/React.createElement(TimelineDot, {
    className: "timeline-dot",
    color: "primary"
  }), index < timelineData.length - 1 && /*#__PURE__*/React.createElement(TimelineConnector, null)), /*#__PURE__*/React.createElement(TimelineContent, {
    className: "MuiTimelineContent-root"
  }, /*#__PURE__*/React.createElement(Paper, {
    elevation: 3,
    className: "timeline-paper"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h6"
  }, item.title), /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    color: "text.secondary"
  }, item.subtitle), " ", /*#__PURE__*/React.createElement(Typography, null, item.description)))))));
};
export default Aboutme;