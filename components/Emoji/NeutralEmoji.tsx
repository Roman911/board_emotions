import { SVGProps } from 'react';

const NeutralEmoji = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="48px"
		height="48px"
		fill="none"
		viewBox="0 0 48 48"
		{ ...props }
	>
		<g id="_12-neutral" data-name="12-neutral">
			<circle cx="24" cy="24" r="23" style={{ fill: '#ffce52' }} />
			<ellipse style={{ fill: '#273941' }} cx="33" cy="18" rx="3" ry="4"/>
			<ellipse style={{ fill: '#273941' }} cx="15" cy="18" rx="3" ry="4"/>
			<ellipse style={{ fill: '#141e21' }} cx="33" cy="18" rx="2" ry="3"/>
			<ellipse style={{ fill: '#141e21' }} cx="15" cy="18" rx="2" ry="3"/>
			<circle style={{ fill: '#f6fafd' }} cx="34" cy="17" r="1"/>
			<circle style={{ fill: '#f6fafd' }} cx="16" cy="17" r="1"/>
			<path d="M24 4c12.15 0 22 8.507 22 19h.975a23 23 0 0 0-45.95 0H2C2 12.507 11.85 4 24 4z" style={{ fill: '#ffe369' }} />
			<path
				d="M46 23c0 10.493-9.85 19-22 19S2 33.493 2 23h-.975c-.014.332-.025.665-.025 1a23 23 0 0 0 46 0c0-.335-.011-.668-.025-1z"
				style={{ fill: '#ffb32b' }} />
			<path style={{ fill: '#273941' }} d="M16 32h16v2H16z"/>
			<ellipse style={{ fill: '#f6fafd' }} cx="37" cy="9" rx=".825" ry="1.148" transform="rotate(-45.02 37 9)"/>
			<ellipse style={{ fill: '#f6fafd' }} cx="30.746" cy="4.5" rx=".413" ry=".574" transform="rotate(-45.02 30.745 4.5)"/>
			<ellipse style={{ fill: '#f6fafd' }} cx="34" cy="7" rx="1.65" ry="2.297" transform="rotate(-45.02 34 7)"/>
		</g>
	</svg>
);

export default NeutralEmoji;
