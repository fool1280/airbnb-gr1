import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Container, Row, Col, Badge } from "react-bootstrap";

const ExperienceDetails = () => {
  const [exp, setExp] = useState(null);
  const { id } = useParams;

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`${process.env.BACKEND_URL}/experiences/${id}`)
      const result = await data.json()
      setExp(result)
    }

    fetchData()
  }, [])

  if(!exp) {
    return <div>Loading...</div>
  }

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
            <img src={exp.pictureUrl} />
          </Col>
          <Col className="detailInfo">
            <h1>{exp.title}</h1>
            <h3>{exp.country}</h3>
            <div className="detailBadgeList">
              {exp.tags.map((tag) => (
                <Badge variant="secondary" className="detailBadge">
                  {tag}
                </Badge>
              ))}
            </div>
            <ul className="durationList">
              <li>
                <i class="fas fa-clock"></i>
                <div>
                  <span>Duration</span>
                  <br />
                  {exp.duration} hour
                </div>
              </li>
              <li>
                <i class="fas fa-user-friends"></i>
                <div>
                  <span>Group size</span>
                  <br />
                  Up to {exp.groupSize} people
                </div>
              </li>
              <li>
                <i class="fas fa-comments"></i>
                <div>
                  <span>Hosted in</span>
                  <br />
                  {exp.languages.map((language) => (
                    <span>{language}</span>
                  ))}
                </div>
              </li>
            </ul>
            <div className="detailDesc">
              <h2>What you'll do</h2>
              <p>{exp.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="detailFooter">
        <Container>
          <Row className="detailFooterRow">
            <Col className="detailFooterLeftCol">
              <h6>{exp.title}</h6>
            </Col>
            <Col className="detailFooterRightCol">
              <span>From ${exp.price}/person</span>
              <button className="detailDateBtn">See Dates</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ExperienceDetails;
