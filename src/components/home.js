import { Col } from 'react-bootstrap';

function Home(){
	return(
		<section id="home">
			<Col xs={10} lg={4}>
			<h1>Hello!</h1>
			<p>
				I'm Alifia Rahmah, an undergraduate student at School of Electrical Engineering and Informatics, Institut Teknologi Bandung, batch 2020.
			</p>
			<p>
				I have a keen interest in technology field, especially things related with computers.
				In my spare time, I love to learn new things by surfing around the internet, or
				building <a href="/projects">mini-projects.</a>
			</p>
			</Col>

		</section>
	);
}

export default Home;