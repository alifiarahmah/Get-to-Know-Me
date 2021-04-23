import { Table, Row, Col } from 'react-bootstrap';

function About(){
	return(
		<section id="about">
			<h1>About Me</h1>

			<h2>Strength, Weakness, Opportunity, Threat (SWOT)</h2>
			
			<p>
				I'm a curious and enthusiastic person, especially when it comes to my field of interest.
				When it comes to my responsibility, I try to do my best. I also want to
				protect my moral value in all of my activities, integrity.
				However, when I got overwhelmed, I could be moody or childish.
			</p>
			<p>
				College life give me a big opportunity to learn and do mistakes
				for learning purposes. This opportunity helps me to
				grow myself to the fullest. However, Individualistic 
				environment seems to make me feel pressured. and I'm still scared of being socially rejected
			</p>
			
			<p>In short, my SWOT could be seen below.</p>
			
			<Table responsive striped bordered variant="light">
				<thead>
					<tr>
						<th width="50%">Strength</th>
						<th width="50%">Weakness</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<ol>
								<li>Curious about things around my field of interest.</li>
								<li>Others say I'm a hard working and pretty strong girl.</li>
								<li>I try to preserve my integrity the best I can.</li>
							</ol>
						</td>
						<td>
							<ol>
								<li>Awkward in unfamiliar and unconfortable moments.</li>
								<li>Naive.</li>
								<li>A bit childish or moody in some occasion.</li>
							</ol>
						</td>
					</tr>
				</tbody>
				<thead>
					<tr>
						<th>Opportunity</th>
						<th>Threat</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<ol>
								<li>College life give me a big chance to learn & hands-on experience.</li>
								<li>Being a college student, it's my phase to learn about much things (hard-skills/soft-skills),
									and making mistakes in order to be better in the future.
								</li>
							</ol>
						</td>
						<td>
							<ol>
								<li>Individualistic environment 
									seems to make me feel pressured.</li>
								<li>Fear of being socially rejected.</li>
							</ol>
						</td>
					</tr>
				</tbody>
			</Table>

			<h2>Organizational experiences</h2>
			
				<h5>Kelompok Ilmiah Remaja (KIR) SMA Negeri 1 Bogor</h5>
				<b>Head of Scientific Insights (2018-2019)</b>
				<p>Responsible for social media content management and blog content of KIR SMA Negeri 1 Bogor with scientific infographics and articles. </p>
				
				<b>Coordinator of Computer Division (2017-2018)</b>
				<p>Organized all computer activities such as computer trainings for the members and contributed to blog management of KIR SMA Negeri 1 Bogor.</p>
				
				<h5>Dewan Kemakmuran Masjid (DKM) “Ar-Rahmah” SMA Negeri 1 Bogor </h5>
				<b>Vice Head of Information and Communication (2018-2019)</b>
				<p>Responsible for social media and blog management of Dewan Kemakmuran Masjid “Ar-Rahmah” SMA Negeri 1 Bogor.</p>

			<h2>What do they say about me?</h2>

			<Row>
				<Col lg={true}>
					<p><i class="text-muted">
						"Alifia is a professional person at work. She can do her part of the job 
						quickly and precisely. She also has the initiative in doing something,
						but sometimes she got a little moody when doing work."
						</i><br/><b>- Bonanza Abi</b>
					</p>
				</Col>
				<Col lg={true}>
					<p><i class="text-muted">
						"Alifia is great partner to work with, she often response immediately and one of the reliable person 
						when I face a technical issues that need quick solver."
					</i><br/><b>- Ihsan Abdul Hakim</b>
					</p>
				</Col>
			</Row>

		</section>
	);
}

export default About;