import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import SelfDrivingCar from "../../Assets/Projects/self-driving-car.jpeg";
import ARfusion from "../../Assets/Projects/ar-fusion.png";
import HandTracker from "../../Assets/Projects/handtracker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ChatShat"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/imrishabhmehrotra/CHATSHAT.git"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HandTracker}
              isBlog={false}
              title="Hand Tracker"
              description="The MediaPipe Hands module provides a pre-trained model for hand tracking, which can detect and track the landmarks (key points) of the human hand in images or video frames. Each landmark corresponds to a specific point on the hand, such as fingertips, knuckles, and palm center.  "
              ghLink="https://github.com/imrishabhmehrotra/SELF_DRIVING_CAR.git"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backend. The classifier successfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ARfusion}
              isBlog={false}
              title="Ar Fusion"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/imrishabhmehrotra/ar-fusion.git"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SelfDrivingCar}
              isBlog={false}
              title="Self Driving Car"
              description="Self Driving Car is a JavaScript project that implements a self-driving car simulation using only native JavaScript, without relying on any external libraries.
              This project aims to showcase the principles of autonomous vehicle control and navigation through a simple and interactive web-based simulation.
              "
              ghLink="https://github.com/imrishabhmehrotra/SELF_DRIVING_CAR.git"
              demoLink="https://selfdrivingcar-mocha.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
