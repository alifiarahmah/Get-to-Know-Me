import { Card, CardColumns } from 'react-bootstrap';

function Projects(){
	return(
		<section id="projects">
			<h1>Past Projects</h1>
			<p>Some of my past works. Mostly made for learning purposes.</p>
			
			<CardColumns>
				<Card>
					<Card.Body>
						<Card.Title>Call-A-Borators UI</Card.Title>
						<Card.Text>
							Call-A-Borators prototype UI for Mile Zero Project Competition made using Flutter.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Card.Link target="_blank" href="https://github.com/alifiarahmah/callaborators">GitHub Repository</Card.Link>
						<Card.Link variant="primary" target="_blank" href="https://wonderful-smoke-08182120f.azurestaticapps.net/">See Live</Card.Link>
					</Card.Footer>
				</Card>

				<Card>
					<Card.Body>
						<Card.Title>Board of Feedback</Card.Title>
						<Card.Text>
							A feedback board platform using Flask and Materialize.css
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Card.Link href="https://github.com/alifiarahmah/board-of-feedback" target="_blank">GitHub Repository</Card.Link>
					</Card.Footer>
				</Card>
				
				<Card>
					<Card.Body>
						<Card.Title>Random Quote Generator</Card.Title>
						<Card.Text>
							A Google Chrome extension generating random productivity quotes.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Card.Link variant="primary" target="_blank" href="https://github.com/alifiarahmah/random-quote-generator">GitHub Repository</Card.Link>
					</Card.Footer>
				</Card>

				<Card>
					<Card.Body>
						<Card.Title>Blue Tile</Card.Title>
						<Card.Text>
							A classic 3x3 blue tile puzzle to make a the tile all red.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Card.Link variant="primary" href="https://jsfiddle.net/alifiarahmah/k3Lchzmt/" target="_blank">JSFiddle</Card.Link>
					</Card.Footer>
				</Card>

			</CardColumns>

		</section>
	);
}

export default Projects;