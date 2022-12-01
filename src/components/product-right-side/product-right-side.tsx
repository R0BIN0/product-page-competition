// Global
import React from "react";

// Styles
import "./product-right-side.css";

// Assets
import t from "../../assets/767haxmj 1.png";

// Types
import { ProductRightSideState } from "./product-right-side-types";

export default function ProductRightSide({ handle }: ProductRightSideState) {
    return (
        <div className="product-page-right">
            <div className="product-page-slider-container">
                <button onClick={() => handle(0)}>left</button>
                <button onClick={() => handle(1)}>right</button>
            </div>

            <img className="product-page-main-picture" src={t} alt="" />

            <div className="product-page-pictures-container">
                <div className="product-page-second-picture-box">
                    <img src="" alt="" />
                </div>
                <div className="product-page-second-picture-box">
                    <img src="" alt="" />
                </div>
                <div className="product-page-second-picture-box">
                    <img src="" alt="" />
                </div>
                <div className="product-page-second-picture-box">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
}
