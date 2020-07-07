import React from "react";
import { Link } from "react-router-dom"

import { Container, Row, Col, Badge } from "react-bootstrap";

const ExperienceDetails = () => {
  return (
    <div className="detailBody">
      <Container>
        <Row className="navDetails">
          <Col>
            <img alt="logo" src="/images/airbnb-logo.png" height="35" />
          </Col>
          <Col className="loginNavSearch">
            <span>
              <i class="fas fa-search"></i>
            </span>
            <input type="text" placeholder="Search" />
          </Col>
          <Col className="loginBtnMainCol">
            <Link to="/create">
              <button className="loginBtnMain">Create Experience</button>
            </Link>
          </Col>
        </Row>
        <Row className="detailRow">
          <Col>
            <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1746293-media_library/original/75578928-27fe-4055-bc50-5ee36ffae190.jpeg?aki_policy=exp_md"/>
          </Col>
          <Col className="detailInfo">
            <h1>Michelin Star Chef - Christina Bowerman</h1>
            <h3>Italy</h3>
            <div className="detailBadgeList">
              <Badge variant="secondary" className="detailBadge">
                COOKING
              </Badge>
            </div>
            <ul className="durationList">
              <li>
                <i class="fas fa-clock"></i>
                <div>
                  <span>Duration</span>
                  <br />1 hour
                </div>
              </li>
              <li>
                <i class="fas fa-user-friends"></i>
                <div>
                  <span>Group size</span>
                  <br />
                  Up to 10 people
                </div>
              </li>
              <li>
                <i class="fas fa-comments"></i>
                <div>
                  <span>Hosted in</span>
                  <br />
                  English, Italian
                </div>
              </li>
            </ul>
            <div className="detailDesc">
              <h2>What you'll do</h2>
              <p>
                Chef Cristina Bowerman is not your typical Italian chef. You're
                about to meet the woman that revolutionized (and modernized)
                Roman haute cuisine herself! Her cooking style opens up a
                conversation between modernity and tradition; she has figured
                out a way of mixing her background as a designer, and her
                travels around the world in order to bring back to Rome a
                fresher, funkier and funnier approach to the Roman traditional
                cuisine that she so deeply loves at Glass Hostaria.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="detailFooter">
        <Container>
          <Row className="detailFooterRow">
            <Col className="detailFooterLeftCol">
              <h6>Michelin Star Chef - Christina Bowerman</h6>
            </Col>
            <Col className="detailFooterRightCol">
              <span>From $70/person</span>
              <button className="detailDateBtn">See Dates</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ExperienceDetails;
