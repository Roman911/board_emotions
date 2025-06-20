import { SVGProps } from 'react';

const SmileEmoji = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="48px"
		height="48px"
		fill="none"
		viewBox="0 0 48 48"
		{...props}
	>
		<circle cx="24" cy="24" r="23" style={{ fill: '#ffce52' }} />
		<path
			d="M7 26c0 3.32 7.6 7 17 7s17-3.68 17-7a12.636 12.636 0 0 1-5.6 10.38 19.76 19.76 0 0 1-22.8 0A12.636 12.636 0 0 1 7 26z"
			style={{ fill: '#ae2d4c' }}
		/>
		<path
			d="M41 26c0 3.32-7.6 7-17 7S7 29.32 7 26c1 1 8 2 17 2s16-1 17-2z"
			style={{ fill: '#f6fafd' }}
		/>
		<ellipse cx="33" cy="18" rx="3" ry="4" style={{ fill: '#273941' }} />
		<ellipse cx="15" cy="18" rx="3" ry="4" style={{ fill: '#273941' }} />
		<ellipse cx="33" cy="18" rx="2" ry="3" style={{ fill: '#141e21' }} />
		<ellipse cx="15" cy="18" rx="2" ry="3" style={{ fill: '#141e21' }} />
		<circle cx="34" cy="17" r="1" style={{ fill: '#f6fafd' }} />
		<circle cx="16" cy="17" r="1" style={{ fill: '#f6fafd' }} />
		<path
			d="M24 35c7.962 0 14.613-2.641 16.468-5.466A12.089 12.089 0 0 0 41 26c0 3.32-7.6 7-17 7S7 29.32 7 26a12.089 12.089 0 0 0 .532 3.534C9.387 32.359 16.038 35 24 35z"
			style={{ fill: '#8a293d' }}
		/>
		<path
			d="M39.475 28.655A3.775 3.775 0 0 0 41 26c-1 1-8 2-17 2S8 27 7 26a3.775 3.775 0 0 0 1.525 2.655C11.223 29.394 17 30 24 30s12.777-.606 15.475-1.345z"
			style={{ fill: '#ededed' }}
		/>
		<path
			d="M24 4c12.15 0 22 8.507 22 19h.975a23 23 0 0 0-45.95 0H2C2 12.507 11.85 4 24 4z"
			style={{ fill: '#ffe369' }}
		/>
		<path
			d="M46 23c0 10.493-9.85 19-22 19S2 33.493 2 23h-.975c-.014.332-.025.665-.025 1a23 23 0 0 0 46 0c0-.335-.011-.668-.025-1z"
			style={{ fill: '#ffb32b' }}
		/>
		<ellipse
			cx="37"
			cy="9"
			rx="0.825"
			ry="1.148"
			transform="rotate(-45.02 37 9)"
			style={{ fill: '#f6fafd' }}
		/>
		<ellipse
			cx="30.746"
			cy="4.5"
			rx="0.413"
			ry="0.574"
			transform="rotate(-45.02 30.746 4.5)"
			style={{ fill: '#f6fafd' }}
		/>
		<ellipse
			cx="34"
			cy="7"
			rx="1.65"
			ry="2.297"
			transform="rotate(-45.02 34 7)"
			style={{ fill: '#f6fafd' }}
		/>
	</svg>
);

export default SmileEmoji;