import { AppState } from "../../app/AppTypes";

export type SizeSliderState = {
    sliderIndex: number;
    slideInProgress: boolean;
};

export type SizeSliderProps = {
    initialState: Readonly<AppState>;
};
