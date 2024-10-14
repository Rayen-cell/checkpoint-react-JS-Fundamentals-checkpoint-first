import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import food from "../food.avif";
import food1 from "../food1.avif";
import food2 from "../food2.avif";

const Feedback = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col xs={6} md={4}>
						<Image style={{ width: "40%" }} src={food} rounded />
					</Col>
					<Col xs={6} md={4}>
						<Image style={{ width: "40%" }} src={food1} roundedCircle />
					</Col>
					<Col xs={6} md={4}>
						<Image style={{ width: "40%" }} src={food2} thumbnail />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Feedback;