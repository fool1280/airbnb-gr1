import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TagsInput from "react-tagsinput";

const AddExperience = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");
    const [groupSize, setGroupSize] = useState(null);
    const [price, setPrice] = useState(null);
    const [duration, setDuration] = useState(null);
    const [pictureUrl, setPictureUrl] = useState("");
    const [tags, setTags] = useState([]);
    const [languages, setLanguages] = useState([]);

    const inputProps = {
        placeholder: "Add a language",
    };

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
            tags,
            languages,
        };
        const newExperience = await fetch(
            "https://cors-anywhere.herokuapp.com/https://airbnb-gr1-backend.herokuapp.com/experiences",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(experienceData),
            }
        );
        alert("Yay! Experience created!");
    };

    return (
        <Container>
            <div className="navCreate">
                <img alt="logo" src="/images/airbnb-logo.png" height="30" />
                <span>Create an Experience</span>
            </div>
            <div className="formDiv">
                <div className="createForm">
                    <h1>
                        Enter all the required information below to create new
                        experience.
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
                        <Row className="categoryRow">
                            <Col className="categoryCol">
                                <label
                                    htmlFor="category"
                                    className="categoryLabel"
                                >
                                    Category:
                                </label>
                                <select
                                    name="category"
                                    className="createInput"
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                >
                                    <option value="" disabled selected>
                                        Choose category
                                    </option>
                                    <option value="Animals">Animals</option>
                                    <option value="Cooking">Cooking</option>
                                    <option value="Music">Music</option>
                                </select>
                            </Col>
                            <Col className="countryCol">
                                <label
                                    htmlFor="country"
                                    className="countryLabel"
                                >
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
                            </Col>
                        </Row>
                        <br />
                        <label className="labelLangsInput">Languages:</label>
                        <TagsInput
                            inputProps={inputProps}
                            value={languages}
                            onChange={setLanguages}
                        />
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
                                    placeholder="Hours"
                                    onChange={(e) =>
                                        setDuration(e.target.value)
                                    }
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
                                    placeholder="Max no. of people"
                                    onChange={(e) =>
                                        setGroupSize(e.target.value)
                                    }
                                    className="createInput"
                                />
                                <br />
                            </Col>
                        </Row>
                        <br />
                        <label className="labelTagsInput">Tags:</label>
                        <TagsInput value={tags} onChange={setTags} />
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
                        <div className="createBtnDiv">
                            <input
                                type="submit"
                                value="Create Experience"
                                className="createBtn"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default AddExperience;
