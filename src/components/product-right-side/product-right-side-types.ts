// Types
import { SliderAction } from "../../types/types";
import { AppState } from "../../app/AppTypes";

export type ProductRightSideState = {
    handleSwitchShoes: (action: SliderAction) => void;
    initialState: Readonly<AppState>;
};

export type ProductRightSideData = {
    modalIsOpen: boolean;
    clickedPicture: number | undefined;
};
