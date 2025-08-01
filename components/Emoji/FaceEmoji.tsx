import { SVGProps } from 'react';

const FaceEmoji = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="48px"
		height="48px"
		fill="none"
		viewBox="0 0 48 48"
		{ ...props }
	>
		<g id="_17-face" data-name="17-face">
			<circle cx="24" cy="24" r="23" style={{ fill: '#ffb32b' }}/>
			<ellipse style={{ fill: '#273941' }} cx="28" cy="25" rx="3" ry="4"/>
			<ellipse style={{ fill: '#273941' }} cx="10" cy="25" rx="3" ry="4"/>
			<ellipse style={{ fill: '#141e21' }} cx="28" cy="25" rx="2" ry="3"/>
			<ellipse style={{ fill: '#141e21' }} cx="10" cy="25" rx="2" ry="3"/>
			<circle style={{ fill: '#f6fafd' }} cx="29" cy="24" r="1"/>
			<circle style={{ fill: '#f6fafd' }} cx="11" cy="24" r="1"/>
			<path style={{ fill: '#273941' }} d="M23 38h-2c0-.408-.779-1-2-1s-2 .592-2 1h-2c0-1.683 1.757-3 4-3s4 1.317 4 3z"/>
			<path d="M24 1a23 23 0 1 0 23 23A23 23 0 0 0 24 1zm-2 45a19 19 0 1 1 19-19 19 19 0 0 1-19 19z"
						style={{ fill: '#ffce52' }} />
			<path d="M47 24A23 23 0 0 0 6.307 9.307a23 23 0 0 1 32.386 32.386A22.95 22.95 0 0 0 47 24z" style={{ fill: '#ffe369' }} />
			<ellipse style={{ fill: '#f6fafd' }} cx="43" cy="26" rx=".825" ry="1.148" transform="rotate(-45.02 43 26)"/>
			<ellipse style={{ fill: '#f6fafd' }} cx="43.746" cy="19.5" rx=".413" ry=".574" transform="rotate(-45.02 43.746 19.5)"/>
			<ellipse style={{ fill: '#f6fafd' }} cx="43" cy="22" rx="1.65" ry="2.297" transform="rotate(-45.02 43 22)"/>
			<path d="M47 8c0-3.866-4.029-7-9-7s-9 3.134-9 7c0 3.635 3.442 6.656 8 7v4l6.423-5.423A6.619 6.619 0 0 0 47 8z"
						style={{ fill: '#5987dd' }} />
			<path
				d="M47 8c0-3.866-4.029-7-9-7a9.549 9.549 0 0 0-7.989 3.785A10.523 10.523 0 0 1 36 3c4.971 0 9 3.134 9 7a5.743 5.743 0 0 1-1 3.194A6.418 6.418 0 0 0 47 8z"
				style={{ fill: '#95b4ff' }} />
			<path
				d="M37 19v-4c-4.558-.344-8-3.365-8-7a5.766 5.766 0 0 1 1.011-3.215A6.433 6.433 0 0 0 27 10c0 3.635 3.442 6.656 8 7v4l6.423-5.423A7.861 7.861 0 0 0 44 13.194c-.189.132-.378.264-.58.383z"
				style={{ fill: '#f29410' }} />
			<path style={{ fill: '#ededed' }} d="M33 7h2v2h-2zM37 7h2v2h-2z"/>
		</g>
	</svg>
);

export default FaceEmoji;
