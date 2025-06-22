const NoResult = ({ message }: { message: string }) => {
	return <div className='mt-6 bg-gray-800 border-1 border-gray-400 text-center text-gray-400 max-w-2xl mx-auto p-8 rounded-md text-lg'>
		{ message }
	</div>
};

export default NoResult;
