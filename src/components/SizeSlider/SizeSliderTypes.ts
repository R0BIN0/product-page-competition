import { AppState } from "../../app/AppTypes";

export type SizeSliderState = {
    sliderIndex: number;
    slideInProgress: boolean;
    sizeSelected: null | number;
};

export type SizeSliderProps = {
    initialState: Readonly<AppState>;
};
