import './footer.css';

export default function Footer() {
	return (
		<ul className='footer'>
			<li className='footer-item'>
				<a
					href='https://github.com/90sPixelDev/bugTrackerFront?tab=readme-ov-file'
					target='_blank'
					rel='noopener noreferrer'
				>
					GitHub Repo
				</a>
			</li>
			<li className='footer-item'>
				<a
					href='https://lienfont.dev/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Portfolio Website
				</a>
			</li>
			<li className='footer-item'>
				<a
					href='https://www.linkedin.com/in/lien-font-developer'
					target='_blank'
					rel='noopener noreferrer'
				>
					LinkedIn Profile
				</a>
			</li>
		</ul>
	);
}
