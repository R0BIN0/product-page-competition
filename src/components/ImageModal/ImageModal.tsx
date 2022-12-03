// Global
import React, { useState } from "react";

// Styles
import "./ImageModal.css";

// assets
import { ReactComponent as Chevron } from "../../assets/Chevron.svg";

// Types
import { ImageModalState, ImageModalProps } from "./ImageModalTypes";
import { SliderAction } from "../../hooks/useSlider/useSliderTypes";

const ImageModal = ({ currentPicture, images, handleOpenModal }: ImageModalProps) => {
    const [data, setData] = useState<ImageModalState>({
        slideInProgress: false,
        currentPicture: currentPicture as number,
    });

    const handleSwitchImages = (action: SliderAction) => {
        console.log("HELLO LES GARS");

        let newState = { ...data };

        switch (action) {
            case 0:
                if (newState.currentPicture <= 0) return;

                newState.currentPicture = newState.currentPicture - 1;
                break;
            case 1:
                if (newState.currentPicture >= images.length - 1) return;

                newState.currentPicture = newState.currentPicture + 1;
                break;

            default:
                break;
        }

        setData(newState);
    };

    return (
        <div className="image-modal-global-container">
            <div onClick={() => handleOpenModal()} className="image-modal-background"></div>
            <div className="image-modal-card-container">
                <div className="image-modal-card">
                    <div className="image-modal-btns-container">
                        <button onClick={() => handleSwitchImages(0)}>
                            <Chevron />
                        </button>
                        <button onClick={() => handleSwitchImages(1)}>
                            <Chevron />
                        </button>
                    </div>
                    {images &&
                        images.map((item, i) => (
                            <img
                                key={i}
                                className={
                                    i === data.currentPicture
                                        ? "image-modal-img-visibile"
                                        : "image-modal-img-invisibile"
                                }
                                src={item}
                                alt=""
                            />
                        ))}
                    <p>
                        {data.currentPicture + 1}/{images.length}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImageModal;
