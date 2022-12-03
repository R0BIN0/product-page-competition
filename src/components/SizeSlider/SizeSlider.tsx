// Global
import React, { useState } from "react";

// Assets
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

// Styles
import "./SizeSlider.css";

// Types
import { SizeSliderState, SizeSliderProps } from "./SizeSliderTypes";
import { SliderAction } from "../../hooks/useSlider/useSliderTypes";

const propsAreEqual = (prevProps: SizeSliderProps, nextProps: SizeSliderProps) => {
    return !prevProps.initialState.shoes && !nextProps.initialState.shoes;
};

export const SizeSlider = React.memo(({ initialState }: SizeSliderProps) => {
    const [sizeSliderState, setSizeSliderState] = useState<SizeSliderState>({
        sliderIndex: 0,
        slideInProgress: false,
    });

    const handleSwitchSlider = (action: SliderAction): void => {
        if (sizeSliderState.slideInProgress) return;

        let newState = { ...sizeSliderState };
        let newIndex: number = sizeSliderState.sliderIndex;

        switch (action) {
            case SliderAction.next:
                newIndex = newIndex + 1;

                if (initialState.shoes.sizes.length - 5 <= newIndex) {
                    newIndex = initialState.shoes.sizes.length - 5;
                }

                break;

            case SliderAction.prev:
                newIndex = newIndex - 1;

                if (newIndex <= 0) {
                    newIndex = 0;
                }

                break;
        }

        newState.sliderIndex = newIndex;
        newState.slideInProgress = true;

        setTimeout(() => {
            newState.slideInProgress = false;
            setSizeSliderState(newState);
        }, 150);

        setSizeSliderState(newState);
    };

    const sizeCardStatus = (itemAvailable: number) => {
        if (itemAvailable > 3) {
            return "size-card-status size-card-status-green";
        } else if (itemAvailable >= 1) {
            return "size-card-status size-card-status-orange";
        } else {
            return "size-card-status size-card-status-grey";
        }
    };

    return (
        <div className="product-page-size-container">
            <div className="product-page-size-btns-container">
                <button
                    className={sizeSliderState.sliderIndex <= 0 ? "btn-no-available" : ""}
                    onClick={() => handleSwitchSlider(0)}
                >
                    <Arrow />
                </button>
                <button
                    className={
                        initialState.shoes.sizes.length - 5 <= sizeSliderState.sliderIndex ? "btn-no-available" : ""
                    }
                    onClick={() => handleSwitchSlider(1)}
                >
                    <Arrow />
                </button>
            </div>
            <div className="product-page-size-card-container">
                <div className="border-shadow"></div>
                <div
                    style={{ transform: `translateX(calc((-125px - 0.75rem) * ${sizeSliderState.sliderIndex}))` }}
                    className="carousel-container"
                >
                    {initialState.shoes.sizes &&
                        initialState.shoes.sizes.map((item, i) => (
                            <div
                                key={i}
                                className={
                                    item.available > 0
                                        ? "product-page-size-card"
                                        : "product-page-size-card no-product-page-size-card"
                                }
                            >
                                <div className="size-card-status"></div>
                                <div className={sizeCardStatus(item.available)}></div>

                                <p className="size-card-number">{item.size}</p>
                                <p className="size-card-left">{item.available} restantes</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}, propsAreEqual);
