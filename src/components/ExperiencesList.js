import React, { useState, useEffect } from "react";
import {
  Button,
  CardDeck,
  OverlayTrigger,
  Popover,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "react-bootstrap";
import Experience from "./Experience";

import { Link } from "react-router-dom"
 
import Rheostat from "rheostat";
 
export default function ExperiencesList() {
  const [exps, setExps] = useState(null);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(null);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  const [tempMinPrice, setTempMinPrice] = useState(1);
  const [tempMaxPrice, setTempMaxPrice] = useState(100);
  console.log(count);
  useEffect(() => {
    async function fetchData() {
      let url = `https://cors-anywhere.herokuapp.com/https://airbnb-gr1-backend.herokuapp.com/experiences?page=${page}`;
      const data = await fetch(url, {
        method: "GET",
      });
      const result = await data.json();
      console.log(result);
      setCount(result.count);
      setExps(result.data);
    }
    fetchData();
  }, [page, minPrice, maxPrice]);
  if (!exps) {
    return <div>Loading...</div>;
  }
  var content = [];
  var temp = [];
  function formatExps() {
    exps.forEach((item, i) => {
      temp.push(item);
      if ((i + 1) % 3 === 0) {
        content.push(temp);
        temp = [];
      }
    });
    if (!(temp === [])) {
      content.push(temp);
    }
  }
  formatExps();
  console.log(content);
 
  const handleChange = (e) => {
    setMinPrice(e.values[0]);
    setMaxPrice(e.values[1]);
  };
 
  const handleValuesUpdated = (e) => {
    setTempMinPrice(e.values[0]);
    setTempMaxPrice(e.values[1]);
  };
 
  return (
    <div>
      <div className="thuong-bg-img">
        <div className="thuong-container">
          <div className="thuong-topnav">
            <Link to="/create">Create an experience</Link>
          </div>
        </div>
 
        <div className="thuong-tagline">
          <span className="thuong-tag1"> Online Experiences </span>
          <span className="thuong-tag2">
            {" "}
            Unique activities to do from home, including cooking experiences
            with world-renowned chefs{" "}
          </span>
        </div>
      </div>
 
      <div className="thuong-list">
        {["bottom"].map((placement) => (
          <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
              <Popover id={`popover-positioned-${placement}`}>
                <Popover.Content>
                  <div className="thuong-list-detail">
                    <input type="checkbox"></input>
                    <label className="check-box"> Great for groups</label>
                    <br />
                    <input type="checkbox"></input>
                    <label className="check-box"> Family friendly</label>
                    <br />
                    <input type="checkbox"></input>
                    <label className="check-box"> Animals</label>
                    <br />
                    <input type="checkbox"></input>
                    <label className="check-box"> Arts & writing</label>
                    <br />
                  </div>
                </Popover.Content>
              </Popover>
            }
          >
            <Button variant="light"> Interests</Button>
          </OverlayTrigger>
        ))}
      </div>
 
      <div className="thuong-list">
        {["bottom"].map((placement) => (
          <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
              <Popover id={`popover-positioned-${placement}`}>
                <Popover.Content>I am working on it!!! :((</Popover.Content>
              </Popover>
            }
          >
            <Button variant="light"> Dates</Button>
          </OverlayTrigger>
        ))}
      </div>
 
      <div className="thuong-list">
        {["bottom"].map((placement) => (
          <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
              <Popover id={`popover-positioned-${placement}`}>
                <Popover.Content>
                  <div className="thuong-list-detail">
                    <input type="checkbox"></input>
                    <label className="check-box"> Morning</label>
                    <br />
                    <label className="check-box1">
                      {" "}
                      Starts before 12 pm{" "}
                    </label>{" "}
                    <br />
                    <input type="checkbox"></input>
                    <label className="check-box"> Afternoon</label>
                    <br />
                    <label className="check-box1">
                      {" "}
                      Starts after 12 pm
                    </label>{" "}
                    <br />
                    <input type="checkbox"></input>
                    <label className="check-box"> Evening</label>
                    <br />
                    <label className="check-box1">
                      {" "}
                      Starts after 5 pm
                    </label>{" "}
                    <br />
                  </div>
                </Popover.Content>
              </Popover>
            }
          >
            <Button variant="light"> Time of day</Button>
          </OverlayTrigger>
        ))}
      </div>
 
      <div className="thuong-list">
        {["bottom"].map((placement) => (
          <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
              <Popover id={`popover-positioned-${placement}`}>
                <Popover.Content>
                  <div className="thuong-list-detail">
                    <input type="checkbox"></input>
                    <label className="check-box"> English </label>
                    <br />
                    <input type="checkbox"></input>
                    <label className="check-box"> French </label>
                    <br />
                    <input type="checkbox"></input>
                    <label className="check-box"> German </label>
                    <br />
                    <input type="checkbox"></input>
                    <label className="check-box"> Japanese </label>
                    <br />
                  </div>
                </Popover.Content>
              </Popover>
            }
          >
            <Button variant="light"> Language offered</Button>
          </OverlayTrigger>
        ))}
      </div>
 
      <div className="priceSlider">
        <div>
          <h3>Price Range:</h3>
          <Rheostat
            min={1}
            max={100}
            values={[minPrice, maxPrice]}
            onChange={handleChange}
            onValuesUpdated={handleValuesUpdated}
            onSliderDragStart={() => setIsDragging(true)}
            onSliderDragEnd={() => setIsDragging(false)}
          />
          <input
            type="text"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="text"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
 
      <div>
        <h2 className="thuong-text-popular">Popular now</h2>
        <div className="d-flex flex-column align-items-center">
          <Pagination>
            <Pagination.Item
              disabled={page == 1}
              onClick={() => setPage(page - 1)}
            >
              Previous Page
            </Pagination.Item>
            <Pagination.Item
              onClick={() => setPage(page + 1)}
              disabled={page * 25 >= count}
            >
              Next Page
            </Pagination.Item>
          </Pagination>
          {content.map((arr, index) => (
            <div key={index}>
              <div className="thuong-list-activities">
                <CardDeck>
                  {arr.map((exp, indexExp) => (
                    <Experience key={indexExp} {...exp}></Experience>
                  ))}
                </CardDeck>
              </div>
            </div>
          ))}
        </div>
        <div className="footer pb-3">
          <Container>
            <Row>
              <Col>
                <h2>ABOUT</h2>
                <h3>How Airbnb works </h3>
                <h3> Diversity & Belonging </h3>
                <h3> Accessibility </h3>
                <h3> Trust & Safety </h3>
                <h3> Airbnb Citizen </h3>
                <h3> Olympics </h3>
                <h3> Newsroom </h3>
              </Col>
              <Col>
                <h2>COMMUNITY</h2>
                <h3>Airbnb Magazine</h3>
                <h3>Airbnb Associates</h3>
                <h3>Airbnb for Work</h3>
                <h3>Invite friends</h3>
                <h3>Careers</h3>
              </Col>
              <Col>
                <h2>HOST</h2>
                <h3>Host your home</h3>
                <h3>Host an online experience</h3>
                <h3>Message from CEO Brian Chesky</h3>
                <h3>Responsible hosting</h3>
                <h3>Open Homes</h3>
                <h3>Resource Center</h3>
                <h3>Community Center</h3>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
