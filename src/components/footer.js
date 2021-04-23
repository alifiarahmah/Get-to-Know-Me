import './footer.css';

function Footer(){
	return(
		<footer className="text-muted">
			<span>Alifia Rahmah - 2020</span><br/>
			<span>
				<a className="text-muted text-decoration-none" target="_blank" href="mailto:16520309@std.stei.itb.ac.id">
					<img src="https://www.sendible.com/hubfs/Sendible_March2018/Images/email-black-60.png" alt="Email"/>
					Email
				</a>
				<a class="text-muted text-decoration-none" target="_blank" href="https://www.instagram.com/hamharaifila">
					<img src="https://www.sendible.com/hs-fs/hubfs/Imported_Blog_Media/sm-icons-instagram-glyph-logo.png" alt="Instagram-logo"/>
					Instagram
				</a>
				<a class="text-muted text-decoration-none" target="_blank" href="https://www.linkedin.com/in/alifiarahmah">
					<img src="https://www.sendible.com/hubfs/Sendible_March2018/Images/linkedin-black-60.png" alt="LinkedIn-logo"/>
					LinkedIn
				</a>
				<a class="text-muted text-decoration-none" target="_blank" href="http://github.com/alifiarahmah">
					<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub-logo"/>
					GitHub
				</a>
			</span>
			<br/>
			<a class="text-muted c" href='https://www.freepik.com/vectors/background'>Background vector created by freepik - www.freepik.com</a>
		</footer>
	);
}

export default Footer;