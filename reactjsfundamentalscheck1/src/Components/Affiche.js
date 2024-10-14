import React from "react";
import { Card } from "react-bootstrap";

const Affiche = () => {
	return (
		<div style={{ margin: "2% 5%" }}>
			<Card className='bg-dark text-white'>
				<Card.Img
					src='https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='Card image'
				/>
				<Card.ImgOverlay>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in
						to additional content. This content is a little bit longer.
					</Card.Text>
					<Card.Text>Last updated 3 mins ago</Card.Text>
				</Card.ImgOverlay>
			</Card>
		</div>
	);
};

export default Affiche;