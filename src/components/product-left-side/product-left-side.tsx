// Global
import { motion } from "framer-motion";

// Styles
import "./product-left-side.css";

// Animation
import { classic_animation } from "../../animation/animation";

// assets
import { ReactComponent as Cart } from "../../assets/cart.svg";

// Types
import { ProductLeftSideState } from "./product-left-side-types";

// Components
import { SizeSlider } from "../SizeSlider/SizeSlider";
import BtnQty from "../BtnQty/BtnQty";

export default function ProductLeftSide({ initialState }: ProductLeftSideState) {
    const calculatePrice = () => {
        const convertPriceToNumber: number = Number(initialState.shoes.price);

        if (initialState.shoes.reduce) {
            const getReduce = Math.ceil((convertPriceToNumber * initialState.shoes.reduce.minus) / 100);
            return convertPriceToNumber - getReduce;
        }
    };

    return (
        <div className="product-page-left">
            <motion.div
                variants={classic_animation}
                initial="global_hidden"
                animate="global_show"
                exit="global_hidden"
                className="product-page-title-container"
            >
                <span>{initialState.shoes.label}</span>
                <h1>{initialState.shoes.title}</h1>
                <h2>NIKE</h2>
            </motion.div>

            <SizeSlider initialState={initialState} />

            <motion.div
                variants={classic_animation}
                initial="global_hidden"
                animate="global_show"
                exit="global_hidden"
                className="product-page-description-container"
            >
                <p>{initialState.shoes.description}</p>
            </motion.div>

            <motion.div
                variants={classic_animation}
                initial="global_hidden"
                animate="global_show"
                exit="global_hidden"
                className="product-page-price-container"
            >
                <div>
                    {initialState.shoes.reduce ? (
                        <>
                            <span className="product-page-percentage">-{initialState.shoes.reduce.minus}%</span>
                            <div className="product-page-reduced-price-container">
                                <p style={{ textDecoration: "line-through red" }} className="product-page-price">
                                    {initialState.shoes.price}€
                                </p>
                                <p className="product-page-price-reduce">{calculatePrice()}€</p>
                            </div>
                        </>
                    ) : (
                        <div className="product-page-reduced-price-container">
                            <p className="product-page-price">{initialState.shoes.price}€</p>
                        </div>
                    )}
                </div>
                <BtnQty />
            </motion.div>

            <motion.button
                variants={classic_animation}
                initial="global_hidden"
                animate="global_show"
                exit="global_hidden"
                className="product-page-add-btn"
            >
                AJOUTER AU PANIER <Cart />
            </motion.button>
        </div>
    );
}
