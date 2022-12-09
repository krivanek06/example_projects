const items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7', 'Items8'];

/* 
1. wrapper- place items into grid -> grid grid-cols-4
2. item - add classes to each item -> p-4 shadow-md bg-slate-500 rounded-lg
3. wrapper - grid on screen resolution -> sm:grid-cols-3 md:grid-cols-4 gap-4 
4. wrapper - hidden on lg-xl -> lg:max-xl:hidden
5. config - register XS breakpoint -> show smallest breakpoint in tailwind config

6. wrapper + item - take more columns -> col-span-3 col-start-2
7. Abstract g-item-wrapper -> p-4 shadow-md bg-slate-500 rounded-lg -> index.scss
*/
export const GripExample = () => {
	return (
		<div className="g-wrapper">
			<h2>Grid example</h2>
			<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:max-xl:hidden mb-4">
				{/* display items */}
				{items.map((item) => (
					<div className="p-4 shadow-md bg-slate-500 rounded-lg">{item}</div>
				))}
			</div>

			<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
				<div className="g-item-wrapper ">item88</div>

				{/* items take more columns */}
				<div className="g-item-wrapper col-span-2 md:col-start-3">item99</div>
			</div>
		</div>
	);
};

/* 
1. Flexing items on some '%' point
2. Flexing with order
*/
export const FlexboxExample = () => {
	return (
		<div className="g-wrapper">
			<h2>Flexbox example</h2>

			{/* Flexing items on some '%' point */}
			<div className="flex flex-col gap-x-4 gap-y-10 sm:flex-row ">
				<div className="g-item-wrapper basis-[35%]">fxFlex="35%"</div>
				<div className="g-item-wrapper basis-[20%] ">fxFlex="20%"</div>
				<div className="g-item-wrapper basis-[45%]">fxFlex</div>
			</div>

			{/* Flexing with order */}
			<div className="wrapper flex flex-col gap-2 sm:flex-row">
				<div className="g-item-wrapper order-1 sm:order-3 flex-1">Order 1</div>
				<div className="g-item-wrapper order-2 flex-1">Order 2</div>
				<div className="g-item-wrapper order-3 sm:order-1 flex-1">Order 3</div>
			</div>
		</div>
	);
};
