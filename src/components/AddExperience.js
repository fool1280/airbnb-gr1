import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const AddExperience = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("")
  const [country, setCountry] = useState("");
  const [groupSize, setGroupSize] = useState(null);
  const [price, setPrice] = useState(null);
  const [duration, setDuration] = useState(null);
  const [pictureUrl, setPictureUrl] = useState("");

  const createExperience = async (e) => {
    e.preventDefault();
    const experienceData = {
      title,
      desc,
      category,
      country,
      groupSize,
      price,
      duration,
      pictureUrl,
    };
    const newExperience = await fetch("http://localhost:3000/experiences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experienceData),
    });
    alert("Yay! Experience created!");
  };

  return (
    <Container>
      <div className="navCreate">
        <img alt="logo" src="/images/airbnb-logo.png" height="30" />
        <span>Create an Experience</span>
      </div>
      <div className="createForm">
        <h1>
          Enter all the required information below to create new experience.
        </h1>
        <form onSubmit={createExperience}>
          <label htmlFor="title" className="createLabel">
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="createInput"
          />
          <br />
          <Row className="categoryRow">
            <Col className="categoryCol">
              <label htmlFor="category" className="categoryLabel">
                Category:
              </label>
              <select
                name="category"
                className="createInput"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled selected>
                  Choose category
                </option>
                <option value="Animals">Animals</option>
                <option value="Cooking">Cooking</option>
                <option value="Music">Music</option>
              </select>
              <br />
            </Col>
            <Col className="countryCol">
              <label htmlFor="country" className="countryLabel">
                Country:
              </label>
              <select
                name="country"
                className="createInput"
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="" disabled selected>
                  Choose country
                </option>
                <option value="Vietnam">Vietnam</option>
                <option value="Korea">Korea</option>
                <option value="Japan">Japan</option>
              </select>
              <br />
            </Col>
          </Row>
          <label htmlFor="desc" className="createLabel">
            Description:
          </label>
          <textarea
            name="desc"
            value={desc}
            rows="5"
            onChange={(e) => setDesc(e.target.value)}
            className="createInput"
          />
          <br />
          <Row className="priceRow">
            <Col xs={3} className="priceCol">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                name="price"
                value={price}
                placeholder="$"
                onChange={(e) => setPrice(e.target.value)}
                className="createInput"
              />
              <br />
            </Col>
            <Col xs={3} className="durationCol">
              <label htmlFor="duration">Duration:</label>
              <input
                type="number"
                name="duration"
                value={duration}
                placeholder="hours"
                onChange={(e) => setDuration(e.target.value)}
                className="createInput"
              />
              <br />
            </Col>
            <Col className="groupCol" xs={6}>
              <label htmlFor="groupSize">Group Size:</label>
              <input
                type="number"
                name="groupSize"
                value={groupSize}
                placeholder="max no. of people"
                onChange={(e) => setGroupSize(e.target.value)}
                className="createInput"
              />
              <br />
            </Col>
          </Row>
          <label htmlFor="pictureUrl" className="createLabel">
            Picture URL:
          </label>
          <input
            type="text"
            name="pictureUrl"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            className="createInput"
          />
          <br />
          <input
            type="submit"
            value="Create Experience"
            className="createBtn"
          />
        </form>
      </div>
    </Container>
  );
};

export default AddExperience;
