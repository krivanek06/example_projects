import { DarkModeButtons } from './components/button-dark-mode';
import { GrayScaleImg } from './components/image-manipulation';

export const App = () => {
	return (
		<div className="flex flex-col items-center gap-10 p-10">
			<div className="p-4 text-center bg-green-400 w-full">Yolo</div>
			{/* Example 1. GRID vs FLEXBOX */}
			{/* <GripExample />
			<FlexboxExample /> */}

			{/* -------------------- */}
			{/* <ButtonLoading /> */}

			{/* -------------------- */}
			<GrayScaleImg />

			{/* dark mode */}
			<DarkModeButtons />
		</div>
	);
};
