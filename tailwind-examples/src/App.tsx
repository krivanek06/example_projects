import { ButtonLoading } from './components/button';
import { DarkModeButtons } from './components/button-dark-mode';
import { FlexboxExample, GripExample } from './components/flexbox-and-grid';
import { GrayScaleImg } from './components/image-manipulation';

export const App = () => {
  return (
    <div className="g-wrapper">
      <div className="w-full p-4 text-center bg-green-400">Yolo</div>
      {/* Example 1. GRID vs FLEXBOX */}
      <GripExample />
      <FlexboxExample />

      {/* -------------------- */}
      <ButtonLoading />

      {/* -------------------- */}
      <GrayScaleImg />

      {/* dark mode */}
      <DarkModeButtons />
    </div>
  );
};
