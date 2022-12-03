// Global
import { useState } from "react";

// Styles
import "./product-left-side.css";

// Hooks
import { useSlider as UseSlider } from "../../hooks/useSlider/useSlider";

// Types
import { ProductLeftSideState } from "./product-left-side-types";

// Components
import { SizeSlider } from "../SizeSlider/SizeSlider";
import BtnQty from "../BtnQty/BtnQty";

export default function ProductLeftSide({ initialState }: ProductLeftSideState) {
    return (
        <div className="product-page-left">
            <div className="product-page-title-container">
                <span>{initialState.shoes.label}</span>
                <h1>{initialState.shoes.title}</h1>
                <h2>NIKE</h2>
            </div>

            <SizeSlider initialState={initialState} />

            <div className="product-page-description-container">
                <p>{initialState.shoes.description}</p>
            </div>

            {/* Description crumb */}

            <div className="product-page-price-container">
                <div>
                    {initialState.shoes.reduce ? (
                        <>
                            <span className="product-page-percentage">-50%</span>
                            <div className="product-page-reduced-price-container">
                                <p style={{ textDecoration: "line-through red" }} className="product-page-price">
                                    112.99€
                                </p>
                                <p className="product-page-price-reduce">56.45€</p>
                            </div>
                        </>
                    ) : (
                        <div className="product-page-reduced-price-container">
                            <p className="product-page-price">112.99€</p>
                        </div>
                    )}
                </div>

                <BtnQty />
            </div>

            <button className="product-page-add-btn">AJOUTER AU PANIER</button>
        </div>
    );
}
