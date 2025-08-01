import { SVGProps } from 'react';

const SleepEmoji = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="48px"
		height="48px"
		fill="none"
		viewBox="0 0 48 48"
		{ ...props }
	>
		<g id="_24-sleep" data-name="24-sleep">
			<circle cx="24" cy="24" r="23" style={{ fill: '#ffce52' }}/>
			<path d="M24 4c12.15 0 22 8.507 22 19h.975a23 23 0 0 0-45.95 0H2C2 12.507 11.85 4 24 4z"
						style={{ fill: '#ffe369' }}/>
			<path
				d="M46 23c0 10.493-9.85 19-22 19S2 33.493 2 23h-.975c-.014.332-.025.665-.025 1a23 23 0 0 0 46 0c0-.335-.011-.668-.025-1z"
				style={{ fill: '#ffb32b' }}/>
			<ellipse style={{ fill: '#f6fafd' }} cx="37" cy="8" rx=".825" ry="1.148" transform="rotate(-45.02 37 8)"/>
			<ellipse style={{ fill: '#f6fafd' }} cx="30.746" cy="3.5" rx=".413" ry=".574" transform="rotate(-45.02 30.746 3.5)"/>
			<ellipse style={{ fill: '#f6fafd' }} cx="34" cy="6" rx="1.65" ry="2.297" transform="rotate(-45.02 34 6)"/>
			<ellipse style={{ fill: '#273941' }} cx="24" cy="31" rx="4" ry="5"/>
			<path
				d="M24 27c2.072 0 3.756 1.977 3.96 4.5.013-.167.04-.329.04-.5 0-2.761-1.791-5-4-5s-4 2.239-4 5c0 .171.027.333.04.5.204-2.523 1.888-4.5 3.96-4.5z"
				style={{ fill: '#141e21' }}/>
			<path d="M24 36a4.024 4.024 0 0 0 3.579-2.808 5.969 5.969 0 0 0-7.158 0A4.024 4.024 0 0 0 24 36z"
						style={{ fill: '#ae2d4c' }}/>
			<path
				d="M24 35a3.789 3.789 0 0 1-3.2-2.047c-.125.08-.258.15-.378.239A4.024 4.024 0 0 0 24 36a4.024 4.024 0 0 0 3.579-2.808c-.12-.089-.253-.159-.378-.239A3.789 3.789 0 0 1 24 35z"
				style={{ fill: '#8a293d' }}/>
			<path style={{ fill: '#273941' }}
						d="M14 23a5.006 5.006 0 0 1-5-5h2a3 3 0 0 0 6 0h2a5.006 5.006 0 0 1-5 5zM34 23a5.006 5.006 0 0 1-5-5h2a3 3 0 0 0 6 0h2a5.006 5.006 0 0 1-5 5z"/>
			<path style={{ fill: '#048ec6' }}
						d="M48 8h-7a1 1 0 0 1-.707-1.707L44.586 2H41V0h6a1 1 0 0 1 .707 1.707L43.414 6H48zM36 15h-6a1 1 0 0 1-.707-1.707L33.586 9H30V7h6a1 1 0 0 1 .707 1.707L32.414 13H36zM26 11h-4a1 1 0 0 1-.707-1.707L23.586 7H22V5h4a1 1 0 0 1 .707 1.707L24.414 9H26z"/>
		</g>
	</svg>
);

export default SleepEmoji;
