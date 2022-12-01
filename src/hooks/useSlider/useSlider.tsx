import { SliderAction } from "./useSliderTypes";

export const useSlider = (index: number, action: SliderAction): number => {
    let newIndex: number;

    switch (action) {
        case SliderAction.next:
            newIndex = index + 1;
            break;
        case SliderAction.prev:
            newIndex = index - 1;
            break;
    }

    return newIndex;
};
