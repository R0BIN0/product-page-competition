// Global
import React, { useState } from "react";

// Styles
import "./product-right-side.css";

// Assets
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

// Components
import ImageModal from "../ImageModal/ImageModal";

// Types
import { ProductRightSideData, ProductRightSideState } from "./product-right-side-types";

export default function ProductRightSide({ handleSwitchShoes, initialState }: ProductRightSideState) {
    const [data, setData] = useState<ProductRightSideData>({
        modalIsOpen: false,
        clickedPicture: undefined,
    });

    const handleOpenModal = (pictureId?: number) => {
        let newState = { ...data };

        if (newState.modalIsOpen) {
            newState.modalIsOpen = false;
            newState.clickedPicture = undefined;
        } else {
            if (pictureId !== undefined) {
                newState.modalIsOpen = true;
                newState.clickedPicture = pictureId;
            }
        }

        console.log(initialState.shoes.pictures.others[0]);

        setData(newState);
    };

    return (
        <>
            <div className="product-page-right">
                <div className="product-page-right-container">
                    <div className="product-page-slider-container">
                        <button onClick={() => handleSwitchShoes(0)}>
                            <Arrow />
                        </button>
                        <button onClick={() => handleSwitchShoes(1)}>
                            <Arrow />
                        </button>
                    </div>

                    <img
                        className="product-page-main-picture"
                        src={initialState.shoes.pictures.main}
                        alt={initialState.shoes.title}
                    />

                    <div className="product-page-pictures-container">
                        {initialState.shoes.pictures.others &&
                            initialState.shoes.pictures.others.map((item, i) => (
                                <div key={i} className="product-page-second-picture-box">
                                    <img onClick={() => handleOpenModal(i)} src={item} alt={initialState.shoes.title} />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            {data.modalIsOpen && (
                <ImageModal
                    images={initialState.shoes.pictures.others}
                    handleOpenModal={handleOpenModal}
                    currentPicture={data.clickedPicture}
                />
            )}
        </>
    );
}
