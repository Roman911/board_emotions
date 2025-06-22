'use client';
import Link from 'next/link';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores';

const Header = observer(() => {
	const { emotionsStore } = useStore();

	return (
		<header className='bg-gray-800 shadow-md'>
			<div className='container mx-auto p-2 flex items-center gap-6 font-semibold text-lg'>
				<Link href="/">
					<Image src="/icons/reshot.svg" alt="logo" width={40} height={40} className='-rotate-45' />
				</Link>
				<Link className='transition duration-200 hover:text-red-400' href="/">Home</Link>
				<Link className='transition duration-200 hover:text-red-400' href="/statistics">Statistics</Link>
				<button onClick={ () => emotionsStore.removeAll() } className='transition duration-200 hover:text-red-400 ml-auto cursor-pointer'>
					Remove all
				</button>
			</div>
		</header>
	)
});

export default Header;
