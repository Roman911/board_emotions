const ErrorBlock = ({ errorMessage }: { errorMessage: string }) => {
	return (
		<div className='text-sm text-red-500 absolute left-0 bottom-0'>{ errorMessage }</div>
	)
};

export default ErrorBlock;
