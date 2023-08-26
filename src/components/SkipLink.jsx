import './skiplink.scss';

function SkipLink() {
	return (
		<button className='skip-link' onClick={() => document.querySelector('main').focus()}>
			Skip to main content
		</button>
	);
}

export default SkipLink;
