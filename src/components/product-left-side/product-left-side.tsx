// Global
import { useState } from "react";

// Styles
import "./product-left-side.css";

// Hooks
import { useSlider as UseSlider } from "../../hooks/useSlider/useSlider";
import { SliderAction } from "../../hooks/useSlider/useSliderTypes";

export default function ProductLeftSide() {
    console.log("render LEFT");

    const [state, setState] = useState({
        index: 1,
        id: "fdsfdsf",
    });

    const launchSlider = (action: SliderAction) => {
        let newState = { ...state };
        const newIndex = UseSlider(newState.index, action);
        newState.index = newIndex;
        setState(newState);
    };

    return (
        <div className="product-page-left">
            <div className="product-page-title-container">
                <span>Meilleure vente</span>
                <h1>Nike Air Force 1 '07 Next Nature</h1>
                <h2>NIKE</h2>
            </div>

            <div className="product-page-size-container">
                <div className="product-page-size-btns-container">
                    <button onClick={() => launchSlider(0)}>left</button>
                    <button onClick={() => launchSlider(1)}>right</button>
                </div>
                <div className="product-page-size-card-container">
                    <div className="border-shadow"></div>
                    <div className="product-page-size-card">
                        <div className="size-card-status"></div>
                        <p className="size-card-number">37</p>
                        <p className="size-card-left">2 restantes</p>
                    </div>
                    <div className="product-page-size-card">
                        <div className="size-card-status"></div>
                        <p className="size-card-number">38</p>
                        <p className="size-card-left">2 restantes</p>
                    </div>
                    <div className="product-page-size-card">
                        <div className="size-card-status"></div>
                        <p className="size-card-number">39</p>
                        <p className="size-card-left">2 restantes</p>
                    </div>
                    <div className="product-page-size-card">
                        <div className="size-card-status"></div>
                        <p className="size-card-number">40</p>
                        <p className="size-card-left">2 restantes</p>
                    </div>
                    <div className="product-page-size-card">
                        <div className="size-card-status"></div>
                        <p className="size-card-number">41</p>
                        <p className="size-card-left">2 restantes</p>
                    </div>
                </div>
            </div>

            <div className="product-page-description-container">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a repellendus dolore explicabo in
                    facilis. Commodi, magnam. Distinctio, fugit quaerat.
                </p>
            </div>

            {/* Description crumb */}

            <div className="product-page-price-container">
                <div>
                    <span className="product-page-percentage">-50%</span>
                    <div className="product-page-reduced-price-container">
                        <p className="product-page-price">112.99€</p>
                        <p className="product-page-price-reduce">56.45€</p>
                    </div>
                </div>
                <div>
                    <button>-</button>
                    <span className="product-page-qty">2</span>
                    <button>+</button>
                </div>
            </div>
            <button className="product-page-add-btn">AJOUTER AU PANIER</button>
        </div>
    );
}
