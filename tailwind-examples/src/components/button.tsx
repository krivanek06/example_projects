import { useState } from 'react';

export const ButtonLoading = () => {
	const [loading, setLoading] = useState(false);

	return (
		<div className="flex justify-around w-full">
			{/* clicking button */}
			<button type="button" className="btn btn-green animate-bounce" onClick={() => setLoading(!loading)}>
				Start animation
			</button>

			{/* spinning button */}
			<button type="button" className="btn btn-blue hover:animate-spin" disabled>
				{loading && <img src="./src/assets/loading.svg" width={24} className="animate-spin" />}
				Processing...
			</button>
		</div>
	);
};
