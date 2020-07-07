import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Container, Row, Col, Badge } from "react-bootstrap";

const ExperienceDetails = () => {
    const [exp, setExp] = useState(null);
    const { id } = useParams();
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    useEffect(() => {
        async function fetchData() {
            let url =
                proxyurl +
                "https://airbnb-gr1-backend.herokuapp.com/experiences";
            const data = await fetch(`${url}/${id}`);
            const result = await data.json();
            console.log(result.data);
            setExp(result.data);
        }
        fetchData();
    }, []);

    if (!exp) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detailBody">
            <Container>
                <Row className="navDetails">
                    <Col>
                        <img
                            alt="logo"
                            src="/images/airbnb-logo.png"
                            height="35"
                        />
                    </Col>
                    <Col className="loginNavSearch">
                        <span>
                            <i className="fas fa-search"></i>
                        </span>
                        <input type="text" placeholder="Search" />
                    </Col>
                    <Col className="loginBtnMainCol">
                        <Link to="/create">
                            <button className="loginBtnMain">
                                Create Experience
                            </button>
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
                            {exp.tags.map((i, index) => (
                                <Badge
                                    variant="secondary"
                                    className="detailBadge"
                                    key={index}
                                >
                                    {i.tag}
                                </Badge>
                            ))}
                        </div>
                        <ul className="durationList">
                            <li>
                                <i className="fas fa-clock"></i>
                                <div>
                                    <span>Duration</span>
                                    <br />
                                    {exp.duration} hour
                                </div>
                            </li>
                            <li>
                                <i className="fas fa-user-friends"></i>
                                <div>
                                    <span>Group size</span>
                                    <br />
                                    Up to {exp.groupSize} people
                                </div>
                            </li>
                            <li>
                                <i className="fas fa-comments"></i>
                                <div>
                                    <span>Hosted in</span>
                                    <br />
                                    {exp.language}
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
