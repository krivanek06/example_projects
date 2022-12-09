/* 
1. apply classes that it looks like a card
2. add max-width -> max-w-[400px]
3. set grayscale -> grayscale opacity-60 blur-sm
4. on hover -> cursor-pointer hover:opacity-100 hover:grayscale-0 hover:blur-none
5. animation on hover ->  transition ease-in-out duration-700
6. bend & scale card -> hover:skew-y-6  hover:scale-105

Text -> https://tailwindcss.com/docs/background-clip
7. add background -> bg-gradient-to-r from-pink-500 to-violet-500 text-4xl font-extrabold
8. set background on text -> bg-clip-text text-transparent
*/
export const GrayScaleImg = () => {
	return (
		<div className="grid gap-4 p-4 bg-white shadow-lg rounded-lg text-gray-700 text-center max-w-[400px] grayscale opacity-60 blur-sm cursor-pointer hover:blur-none hover:opacity-100 hover:grayscale-0 transition ease-in-out duration-700 hover:skew-y-6 hover:scale-105 divide-y-2 ">
			<h3 className="bg-gradient-to-r from-pink-500 to-violet-500 text-4xl font-extrabold bg-clip-text text-transparent">
				Example title
			</h3>
			<img src="src/assets/ngrx.png" height={50} className="m-auto" />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nihil facilis consectetur nobis officiis
				tempore repellendus aperiam aut voluptate eveniet neque deleniti magnam dolorum dolores modi ipsa, fuga magni
				amet!
			</p>
		</div>
	);
};

export const GrayScaleImgSkeleton = () => {
	return <div></div>;
};
