// Global
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Styles
import "./Product.css";

// Components
import ProductLeftSide from "../components/product-left-side/product-left-side";
import ProductRightSide from "../components/product-right-side/product-right-side";

// Const
import { ProductView } from "../const/ProductsTypes";
import { ProductViews } from "../const/Products";

// Types
import { AppState } from "../app/AppTypes";
import { SliderAction } from "../types/types";

export default function Product() {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        let newState = { ...initialState };

        if (location.pathname === "/") {
            newState.shoes = ProductViews[ProductView.NIKE_1];
        } else {
            const getCurrentShoe: ProductView = Number(location.pathname.replace("/", ""));
            newState.shoes = ProductViews[getCurrentShoe];
        }

        setInitialState(newState);
    }, []);

    const [initialState, setInitialState] = useState<AppState>({
        shoes: ProductViews[ProductView.NIKE_1],
        slideInProgress: false,
    });

    const handleSwitchShoes = (action: SliderAction): void => {
        if (initialState.slideInProgress) return;

        let newState = { ...initialState };
        let newShoes: ProductView;
        const currentShoes = initialState.shoes.id;

        switch (action) {
            case SliderAction.next:
                newShoes = currentShoes + 1;

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

        navigate(`/${newShoes}`);
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
                <ProductLeftSide initialState={initialState} />
                <ProductRightSide initialState={initialState} handleSwitchShoes={handleSwitchShoes} />
            </div>
        </div>
    );
}
