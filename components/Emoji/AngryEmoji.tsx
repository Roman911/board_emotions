import { SVGProps } from 'react';

const AngryEmoji = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="48px"
		height="48px"
		fill="none"
		viewBox="0 0 48 48"
		{ ...props }
	>
		<g id="_28-angry" data-name="28-angry">
			<circle cx="24" cy="24" r="23" style={{ fill: '#cf4054' }}/>
			<path d="M24 4c12.15 0 22 8.507 22 19h.975a23 23 0 0 0-45.95 0H2C2 12.507 11.85 4 24 4z" style={{ fill: '#f45269' }} />
			<path style={{ fill: '#ae2d4c' }}
						d="M46 23c0 10.493-9.85 19-22 19S2 33.493 2 23h-.975c-.014.332-.025.665-.025 1a23 23 0 0 0 46 0c0-.335-.011-.668-.025-1z"/>
			<ellipse style={{ fill: '#f6fafd' }} cx="36.5" cy="8.5" rx=".825" ry="1.148" transform="rotate(-45.02 36.5 8.5)"/>
			<ellipse style={{ fill: '#f6fafd' }} cx="30.246" cy="4" rx=".413" ry=".574" transform="rotate(-45.02 30.246 4)"/>
			<ellipse style={{ fill: '#f6fafd' }} cx="33.5" cy="6.5" rx="1.65" ry="2.297" transform="rotate(-45.02 33.5 6.5)"/>
			<ellipse style={{ fill: '#ae2d4c' }} cx="24" cy="25" rx="10" ry="2"/>
			<path style={{ fill: '#141e21' }}
						d="m39.447 16.9-.894-1.79-4.934 2.467-2.927 1.464-.136.068.015.03a.982.982 0 0 0-.4.55A5.335 5.335 0 0 0 30 21c0 2.243 1.317 4 3 4s3-1.757 3-4a5.011 5.011 0 0 0-.483-2.14zM17.432 19.135l.015-.03-.136-.068-2.927-1.464-4.937-2.468-.894 1.795 3.93 1.965A5.011 5.011 0 0 0 12 21c0 2.243 1.317 4 3 4s3-1.757 3-4a5.335 5.335 0 0 0-.168-1.315.982.982 0 0 0-.4-.55z"/>
			<path style={{ fill: '#273941' }}
						d="M16.86 19.93A4.07 4.07 0 0 1 17 21c0 1.66-.9 3-2 3s-2-1.34-2-3a3.516 3.516 0 0 1 .94-2.53zM35 21c0 1.66-.9 3-2 3s-2-1.34-2-3a4.07 4.07 0 0 1 .14-1.07l2.92-1.46A3.516 3.516 0 0 1 35 21z"/>
			<path style={{ fill: '#141e21' }} d="M31 36h-2c0-1.812-2.23-4-5-4s-5 2.188-5 4h-2c0-2.832 2.993-6 7-6s7 3.168 7 6z"/>
		</g>
	</svg>
);

export default AngryEmoji;
