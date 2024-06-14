import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import "../styles/about.css"; // Import custom CSS

const About = () => {
  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1>About Us</h1>
          <p>
            Welcome to our tour and travel company. We are dedicated to
            providing you with the best travel experiences and memories that
            will last a lifetime. Our team of experienced travel professionals
            is here to help you plan your perfect trip.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md="6">
          <Card className="equal-card">
            <CardBody>
              <CardTitle tag="h5">Our Mission</CardTitle>
              <CardText>
                Our mission is to make travel accessible and enjoyable for
                everyone. We strive to offer the best deals on flights, hotels,
                and vacation packages, and to provide top-notch customer service
                to ensure a smooth travel experience.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card className="equal-card">
            <CardBody>
              <CardTitle tag="h5">Our Vision</CardTitle>
              <CardText>
                Our vision is to be the leading travel company, known for our
                commitment to excellence and our passion for travel. We aim to
                inspire people to explore new destinations and to create
                unforgettable travel experiences.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md="4">
          <Card className="equal-card">
            <CardBody>
              <CardTitle tag="h5">Quality Service</CardTitle>
              <CardText>
                We believe in providing the highest quality of service to our
                customers. Our team is available 24/7 to assist you with any
                travel-related inquiries or issues related to travel.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card className="equal-card">
            <CardBody>
              <CardTitle tag="h5">Experienced Team</CardTitle>
              <CardText>
                Our team of travel experts has years of experience in the
                industry. We use our knowledge and expertise to help you plan
                the perfect trip, tailored to your preferences and budget.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card className="equal-card">
            <CardBody>
              <CardTitle tag="h5">Customer Satisfaction</CardTitle>
              <CardText>
                Customer satisfaction is our top priority. We go above and
                beyond to ensure that our customers are happy with their travel
                experiences. Your feedback is important to us.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
