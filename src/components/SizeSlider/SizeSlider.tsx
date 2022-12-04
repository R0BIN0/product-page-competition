// Global
import React, { useState } from "react";
import { motion } from "framer-motion";

// Assets
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

// Styles
import "./SizeSlider.css";

// Animation
import {
    classic_animation,
    size_stagger_container_animation,
    size_stagger_items_animation,
} from "../../animation/animation";

// Types
import { SizeSliderState, SizeSliderProps } from "./SizeSliderTypes";
import { SliderAction } from "../../hooks/useSlider/useSliderTypes";
import { useEffect } from "react";

const propsAreEqual = (prevProps: SizeSliderProps, nextProps: SizeSliderProps) => {
    return !prevProps.initialState.shoes && !nextProps.initialState.shoes;
};

export const SizeSlider = React.memo(({ initialState }: SizeSliderProps) => {
    const getNumberOfSlide = () => {
        const browserWidth = window.innerWidth;

        if (browserWidth <= 465) {
            return 2;
        } else if (browserWidth <= 600) {
            return 3;
        } else if (browserWidth <= 730) {
            return 4;
        } else {
            return 5;
        }
    };

    useEffect(() => {
        window.addEventListener("resize", getNumberOfSlide);

        return () => {
            window.removeEventListener("resize", getNumberOfSlide);
        };
    }, []);

    const [sizeSliderState, setSizeSliderState] = useState<SizeSliderState>({
        sliderIndex: 0,
        slideInProgress: false,
        sizeSelected: null,
    });

    const handleSwitchSlider = (action: SliderAction): void => {
        if (sizeSliderState.slideInProgress) return;

        let newState = { ...sizeSliderState };
        let newIndex: number = sizeSliderState.sliderIndex;

        switch (action) {
            case SliderAction.next:
                newIndex = newIndex + 1;

                if (initialState.shoes.sizes.length - getNumberOfSlide() <= newIndex) {
                    newIndex = initialState.shoes.sizes.length - getNumberOfSlide();
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

    const handleSelectedSize = (nbrItem: number, id: number) => {
        if (nbrItem <= 0) return;

        let newState = { ...sizeSliderState };
        newState.sizeSelected = id;
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
            <motion.div
                variants={classic_animation}
                initial="global_hidden"
                animate="global_show"
                exit="global_hidden"
                className="product-page-size-btns-container"
            >
                <button
                    className={sizeSliderState.sliderIndex <= 0 ? "btn-no-available" : ""}
                    onClick={() => handleSwitchSlider(0)}
                >
                    <Arrow />
                </button>
                <button
                    className={
                        initialState.shoes.sizes.length - getNumberOfSlide() <= sizeSliderState.sliderIndex
                            ? "btn-no-available"
                            : ""
                    }
                    onClick={() => handleSwitchSlider(1)}
                >
                    <Arrow />
                </button>
            </motion.div>
            <div className="product-page-size-card-container">
                <div className="border-shadow"></div>
                <motion.div
                    variants={size_stagger_container_animation}
                    initial="exit"
                    animate="show"
                    exit="exit"
                    style={{ transform: `translateX(calc((-125px - 0.75rem) * ${sizeSliderState.sliderIndex}))` }}
                    className="carousel-container"
                >
                    {initialState.shoes.sizes &&
                        initialState.shoes.sizes.map((item, i) => (
                            <motion.button
                                variants={size_stagger_items_animation}
                                key={i}
                                onClick={() => handleSelectedSize(item.available, i)}
                                className={
                                    item.available > 0
                                        ? i === sizeSliderState.sizeSelected
                                            ? "product-page-size-card product-page-size-card-selected"
                                            : "product-page-size-card"
                                        : "product-page-size-card no-product-page-size-card"
                                }
                            >
                                <div className="size-card-status"></div>
                                <div className={sizeCardStatus(item.available)}></div>

                                <p className="size-card-number">{item.size}</p>
                                <p className="size-card-left">{item.available} restantes</p>
                            </motion.button>
                        ))}
                </motion.div>
            </div>
        </div>
    );
}, propsAreEqual);
