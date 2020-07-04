import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ExperiencesList() {
	const [exps, setExps] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const data = await fetch("http://localhost:5000/experiences");
			const result = await data.json();
			setExps(result);
		}
		fetchData();
	}, []);
	if (!exps) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<div class="thuong-bg-img">
				<div class="thuong-container">
					<div class="thuong-topnav">
						<a href="#home">Host your home</a>
						<a href="#news">Host an experience</a>
						<a href="#contact">Help</a>
						<a href="#about">Log in</a>
						<a href="#about">Sign up</a>
					</div>
				</div>

				<div class="thuong-tagline">
					<span class="thuong-tag1"> Online Experiences </span>
					<span class="thuong-tag2"> Unique activities to do from home, including cooking experiences with world-renowned chefs </span>
				</div>
			</div>

			<div class="thuong-list">
				{["bottom"].map((placement) => (
					<OverlayTrigger
						trigger="click"
						key={placement}
						placement={placement}
						overlay={
							<Popover id={`popover-positioned-${placement}`}>
								<Popover.Content>
									<div class="thuong-list-detail">
										<input type="checkbox"></input>
										<label class="check-box"> Great for groups</label>
										<br />
										<input type="checkbox"></input>
										<label class="check-box"> Family friendly</label>
										<br />
										<input type="checkbox"></input>
										<label class="check-box"> Animals</label>
										<br />
										<input type="checkbox"></input>
										<label class="check-box"> Arts & writing</label>
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

			<div class="thuong-list">
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

			<div class="thuong-list">
				{["bottom"].map((placement) => (
					<OverlayTrigger
						trigger="click"
						key={placement}
						placement={placement}
						overlay={
							<Popover id={`popover-positioned-${placement}`}>
								<Popover.Content>
									<div class="thuong-list-detail">
										<input type="checkbox"></input>
										<label class="check-box"> Morning</label>
										<br />
										<label class="check-box1"> Starts before 12 pm </label> <br />
										<input type="checkbox"></input>
										<label class="check-box"> Afternoon</label>
										<br />
										<label class="check-box1"> Starts after 12 pm</label> <br />
										<input type="checkbox"></input>
										<label class="check-box"> Evening</label>
										<br />
										<label class="check-box1"> Starts after 5 pm</label> <br />
									</div>
								</Popover.Content>
							</Popover>
						}
					>
						<Button variant="light"> Time of day</Button>
					</OverlayTrigger>
				))}
			</div>

			<div class="thuong-list">
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
						<Button variant="light"> Price</Button>
					</OverlayTrigger>
				))}
			</div>

			<div class="thuong-list">
				{["bottom"].map((placement) => (
					<OverlayTrigger
						trigger="click"
						key={placement}
						placement={placement}
						overlay={
							<Popover id={`popover-positioned-${placement}`}>
								<Popover.Content>
									<div class="thuong-list-detail">
										<input type="checkbox"></input>
										<label class="check-box"> English </label>
										<br />
										<input type="checkbox"></input>
										<label class="check-box"> French </label>
										<br />
										<input type="checkbox"></input>
										<label class="check-box"> German </label>
										<br />
										<input type="checkbox"></input>
										<label class="check-box"> Japanese </label>
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

			<div>
				<h2 class="thuong-text-popular">Popular now in Vietnam</h2>

				<div class="thuong-list-activities">
					<CardDeck>
						<Card>
							<Card.Img variant="top" src="holder.js/100px160" />
							<Card.Body>
								<Card.Title>Harry Potter Magic in Edinburgh Tour</Card.Title>
								<Card.Text>From 120 USD/person </Card.Text>
								<Card.Text>1 hour </Card.Text>
								<Card.Text> * 4.79 (89) </Card.Text>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant="top" src="holder.js/100px160" />
							<Card.Body>
								<Card.Title>Harry Potter Magic in Edinburgh Tour</Card.Title>
								<Card.Text>From 120 USD/person </Card.Text>
								<Card.Text>1 hour </Card.Text>
								<Card.Text> * 4.79 (89) </Card.Text>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant="top" src="holder.js/100px160" />
							<Card.Body>
								<Card.Title>Harry Potter Magic in Edinburgh Tour</Card.Title>
								<Card.Text>From 120 USD/person </Card.Text>
								<Card.Text>1 hour </Card.Text>
								<Card.Text> * 4.79 (89) </Card.Text>
							</Card.Body>
						</Card>
					</CardDeck>
				</div>
				<div class="footer">
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

			{exps.map((e) => (
				<Experience {...e} />
			))}
		</div>
	);
}

const Experience = ({ title, pictureUrl, country, duration, price }) => (
	<div>
		<div class="thuong-list-activities">
			<CardDeck>
				<Card>
					<Card.Img variant="top" src="src={pictureUrl}" />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Title>{country}</Card.Title>

						<Card.Text>Starting from ${price}</Card.Text>
						<Card.Text>{duration} hours</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant="top" src="src={pictureUrl}" />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Title>{country}</Card.Title>
						<Card.Text>Starting from ${price} </Card.Text>
						<Card.Text>{duration} hours</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant="top" src="src={pictureUrl}" />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Title>{country}</Card.Title>
						<Card.Text>Starting from ${price} </Card.Text>
						<Card.Text>{duration} hours </Card.Text>
					</Card.Body>
				</Card>
			</CardDeck>
		</div>

		<h4></h4>
		<h4></h4>
	</div>
);
