export const DarkModeButtons = () => {
	const toggleDarkMode = () => {
		const className = 'dark';
		const bodyClass = window.document.body.classList;

		if (bodyClass.contains(className)) {
			bodyClass.remove(className);
		} else {
			bodyClass.add(className);
		}
	};

	return (
		<div className="flex flex-col gap-4 w-[200px]">
			<button type="button" onClick={toggleDarkMode} className="btn btn-blue m-auto">
				Set dark mode
			</button>

			{/* card */}
			<div className="p-4 bg-white text-green-400 dark:bg-blue-900 dark:text-white ">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam a delectus tempore. Maiores, a perferendis. A
				doloremque saepe dolorem asperiores ducimus odit eaque harum ratione. Et quia id voluptatibus cum!
			</div>
		</div>
	);
};
