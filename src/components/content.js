import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Home from './home.js';
import About from './about.js';
import Reason from './reason';
import Projects from './projects.js';
import './content.css';

function Content() {

	return(
		<Container>
			<Row>
				<Col></Col>
				<Col xs={10}>
					<Switch>
						<Route exact path="/">
							<Home/>
						</Route>
						<Route path="/about">
							<About/>
						</Route>
						<Route path="/reason">
							<Reason/>
						</Route>
						<Route path="/projects">
							<Projects/>
						</Route>
						<Redirect to="/"/>
					</Switch>
				</Col>
				<Col></Col>
			</Row>
		</Container>
	)
}

export default Content;