// Global

// Styles
import { useState } from "react";
import "./App.css";

// Components
import ProductLeftSide from "../components/product-left-side/product-left-side";
import ProductRightSide from "../components/product-right-side/product-right-side";

// Data
import { ProductViews } from "../const/Products";

// Types
import { AppState } from "./AppTypes";
import { ProductView } from "../const/ProductsTypes";
import { SliderAction } from "../hooks/useSlider/useSliderTypes";

function App() {
    const [initialState, setInitialState] = useState<AppState>({
        shoes: ProductViews[ProductView.NIKE_AIR_MAX_1],
        slideInProgress: false,
    });

    const handle = (action: SliderAction): void => {
        if (initialState.slideInProgress) return;

        let newState = { ...initialState };
        let newShoes: ProductView;
        const currentShoes = initialState.shoes.id;

        switch (action) {
            case SliderAction.next:
                newShoes = currentShoes + 1;

                // if shoes === undefined go to first one
                if (!ProductViews[newShoes]) {
                    newShoes = 0;
                }

                break;

            case SliderAction.prev:
                newShoes = currentShoes - 1;

                // if shoes === undefined go to last one
                if (!ProductViews[newShoes]) {
                    const productsLength = Object.keys(ProductViews).length;
                    newShoes = productsLength - 1;
                }

                break;
        }

        newState.shoes = ProductViews[newShoes];
        newState.slideInProgress = true;

        setTimeout(() => {
            newState.slideInProgress = false;
            setInitialState(newState);
        }, 1000);

        setInitialState(newState);
    };

    return (
        <div className="product-page-global-container">
            <div className="product-page-container">
                <p>{initialState.shoes.color}</p>
                <ProductLeftSide />
                <ProductRightSide handle={handle} />
            </div>
        </div>
    );
}

export default App;
