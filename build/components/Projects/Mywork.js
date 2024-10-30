import React, { useState } from 'react';
import './Mywork.css';
const Mywork = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const projects = [{
    title: 'Movie Booking Application',
    description: 'Developed a responsive React front-end with seamless API integration using Axios, implemented a robust back-end with Node, Express, and Sequelize, and contributed to engineering analysis and thorough technical documentation.',
    github: 'https://github.com/AnantSutar/LoopCinemas',
    technologies: ['React', 'Node.js', 'Express', 'MysqL']
  }, {
    title: 'Chain Reaction Game',
    description: 'Developed an interactive chain reaction game in Python with full SDLC engagement, utilizing databases, networking, and threading, applied data analytics for user insights, and ensured thorough documentation and team communication.',
    github: 'https://github.com/omkar-7/Chain-Reaction-Multi-Player',
    technologies: ['Python', 'Tkinter', 'Mysql']
  }, {
    title: 'Machine Learning Model: Classifying Images of Road Traffic Signs',
    description: 'Collaboratively developed traffic sign recognition models using MLP and CNN in Python, conducted EDA to improve generalization, and ensured robust performance through independent testing and benchmarking.',
    github: 'https://github.com/AnantSutar/Machine-Learning-Model-Classifying-Images-of-Road-Traffic-Signs',
    technologies: ['Python', 'Scikit-Learn', 'Tensorflow', 'Pandas']
  }, {
    title: 'Lung Disease Prediction Using Chest X-rays',
    description: 'Developed a predictive model for lung disease detection from chest X-rays, utilizing data preprocessing, feature extraction, and advanced machine learning algorithms to enhance accuracy.',
    github: 'https://github.com/omkar-7/CXR-Web-App',
    technologies: ['Python', 'Scikit-Learn', 'Tensorflow', 'Pandas']
  }, {
    title: 'Todo App with Rails',
    description: 'Built a full-stack to-do app with a responsive React front-end, a robust Ruby on Rails back-end, and PostgreSQL integration, ensuring smooth API communication and comprehensive technical documentation.',
    github: 'https://github.com/AnantSutar/RailsTodo',
    technologies: ['Ruby', 'Rails', 'React', 'Postgres']
  } // Add more projects here...
  ];
  const researchPapers = [{
    title: 'Computational Analysis of Deep Learning Models for Classification of EEG Data related to Cognitive Impairment',
    description: 'This paper reviews deep learning techniques like CNN, RNN, MLP, and Deep Belief Networks for EEG classification, with CNN achieving the best results, including 98.5% accuracy in seizure detection.',
    github: 'https://shorturl.at/yDp8k',
    technologies: ['Semantic Scholar']
  }, {
    title: 'Detection of Pneumonia Using Machine Learning and Deep Learning Techniques',
    description: 'This paper explores lung disease diagnosis using deep learning, achieving 96% accuracy in pneumonia detection with CNN models.',
    github: 'https://shorturl.at/9Xskd',
    technologies: ['Wiley']
  }, {
    title: 'MetaEfficientNet: A Few-Shot Learning Approach for Lung Disease Classification',
    description: 'MetaEfficientNet, a few-shot learning model, achieved 97% accuracy (AUC 0.9734), outperforming CNN and VGG16-based models, with 98% accuracy using a 3-way-8-shot approach.',
    github: 'https://shorturl.at/dMwWv',
    technologies: ['Springer']
  }
  // Add more research papers/projects here...
  ];
  return /*#__PURE__*/React.createElement("div", {
    className: "mywork-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: activeTab === 'projects' ? 'active' : '',
    onClick: () => setActiveTab('projects')
  }, "Projects"), /*#__PURE__*/React.createElement("button", {
    className: activeTab === 'research' ? 'active' : '',
    onClick: () => setActiveTab('research')
  }, "Research Papers")), /*#__PURE__*/React.createElement("div", {
    className: "work-content"
  }, activeTab === 'projects' && /*#__PURE__*/React.createElement("div", {
    className: "horizontal-scroll"
  }, projects.map((project, index) => /*#__PURE__*/React.createElement("div", {
    className: "project-card",
    key: index
  }, /*#__PURE__*/React.createElement("h3", null, project.title), /*#__PURE__*/React.createElement("div", {
    className: "technologies"
  }, project.technologies.map((tech, idx) => /*#__PURE__*/React.createElement("span", {
    key: idx,
    className: "technology"
  }, tech))), /*#__PURE__*/React.createElement("p", null, project.description), /*#__PURE__*/React.createElement("a", {
    href: project.github,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "View on GitHub")))), activeTab === 'research' && /*#__PURE__*/React.createElement("div", {
    className: "horizontal-scroll"
  }, researchPapers.map((paper, index) => /*#__PURE__*/React.createElement("div", {
    className: "project-card",
    key: index
  }, /*#__PURE__*/React.createElement("h3", null, paper.title), /*#__PURE__*/React.createElement("div", {
    className: "technologies"
  }, paper.technologies.map((tech, idx) => /*#__PURE__*/React.createElement("span", {
    key: idx,
    className: "technology"
  }, tech))), /*#__PURE__*/React.createElement("p", null, paper.description), /*#__PURE__*/React.createElement("a", {
    href: paper.github,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "View"))))));
};
export default Mywork;