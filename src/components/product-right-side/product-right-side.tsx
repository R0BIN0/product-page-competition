// Global
import React from "react";

// Styles
import "./product-right-side.css";

// Assets
import t from "../../assets/767haxmj 1.png";

export default function ProductRightSide() {
    console.log("render RIGHT");

    return (
        <div className="product-page-right">
            <div className="product-page-slider-container">
                <button>left</button>
                <button>right</button>
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
