// Global
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Styles
import "./product-right-side.css";

// Assets
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

// Components
import ImageModal from "../ImageModal/ImageModal";

// Types
import { ProductRightSideData, ProductRightSideState } from "./product-right-side-types";

export default function ProductRightSide({ handleSwitchShoes, initialState }: ProductRightSideState) {
    const ease = [0.08, 0.82, 0.17, 1];

    const productRightSideAnimation = {
        // Shoe Animation
        shoe_hidden: {
            y: -50,
            opacity: 0,
        },

        shoe_show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.75,
                ease: ease,
            },
        },

        shoe_exit: {
            y: -50,
            opacity: 0,
            transition: {
                duration: 0.75,
                ease: ease,
            },
        },
    };

    const container = {
        show: {
            transition: {
                staggerChildren: 0.05,
                ease: ease,
            },
        },

        exit: {
            transition: {
                staggerChildren: 0.05,
                ease: ease,
            },
        },
    };

    const items = {
        hidden: { transform: "translateY(-100%)", opacity: 0 },

        show: {
            opacity: 1,
            transform: "translateY(0%)",
            transition: {
                duration: 0.75,
                ease: ease,
            },
        },

        exit: {
            opacity: 0,
            transform: "translateY(-100%)",
            transition: {
                duration: 0.75,
                ease: ease,
            },
        },
    };

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

                    <div className="product-page-main-picture-container">
                        <motion.img
                            variants={productRightSideAnimation}
                            initial="shoe_hidden"
                            animate="shoe_show"
                            exit="shoe_hidden"
                            className="product-page-main-picture"
                            src={initialState.shoes.pictures.main}
                            alt={initialState.shoes.title}
                        />
                    </div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="product-page-pictures-container"
                    >
                        {initialState.shoes.pictures.others &&
                            initialState.shoes.pictures.others.map((item, i) => (
                                <motion.div variants={items} key={i} className="product-page-second-picture-box">
                                    <img onClick={() => handleOpenModal(i)} src={item} alt={initialState.shoes.title} />
                                </motion.div>
                            ))}
                    </motion.div>
                </div>
            </div>
            <AnimatePresence>
                {data.modalIsOpen && (
                    <div>
                        <ImageModal
                            images={initialState.shoes.pictures.others}
                            handleOpenModal={handleOpenModal}
                            currentPicture={data.clickedPicture}
                        />
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
