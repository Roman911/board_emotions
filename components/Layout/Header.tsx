import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
	return (
		<header className='bg-cyan-800 shadow-md'>
			<div className='container mx-auto p-2 flex items-center gap-4'>
				<Link href="/">
					<Image src="/icons/reshot.svg" alt="logo" width={40} height={40} className='-rotate-45' />
				</Link>
				<Link href="/">Home</Link>
				<Link href="/statistics">Statistics</Link>
			</div>
		</header>
	)
};

export default Header;
