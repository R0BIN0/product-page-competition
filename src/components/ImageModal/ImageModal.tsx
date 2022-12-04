// Global
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Styles
import "./ImageModal.css";

// assets
import { ReactComponent as Chevron } from "../../assets/Chevron.svg";
import { ReactComponent as Cross } from "../../assets/cross.svg";

// Types
import { ImageModalState, ImageModalProps } from "./ImageModalTypes";
import { SliderAction } from "../../hooks/useSlider/useSliderTypes";
import { useEffect } from "react";

const ImageModal = ({ currentPicture, images, handleOpenModal }: ImageModalProps) => {
    const [preventFirstRender, setPreventFirstRender] = useState<boolean>(true);

    useEffect(() => {
        if (preventFirstRender) {
            setPreventFirstRender(false);
        }
    }, []);

    const ease = [1, 0, 0, 1];

    const modalCardAnimation = {
        // Modal Shadow

        background_hidden: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: ease,
            },
        },

        background_show: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: ease,
            },
        },

        // Modal Shadow

        ...(!preventFirstRender && {
            imgs_hidden: {
                x: 50,
                opacity: 0,
            },

            imgs_show: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    ease: ease,
                },
            },

            imgs_exit: {
                x: -50,
                opacity: 0,
                transition: {
                    duration: 0.25,
                    ease: ease,
                },
            },
        }),

        // Modal card
        modal_card_hidden: {
            y: 50,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: ease,
            },
        },

        modal_card_show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: ease,
            },
        },
    };

    const [data, setData] = useState<ImageModalState>({
        slideInProgress: false,
        currentPicture: currentPicture as number,
    });

    const handleSwitchImages = (action: SliderAction) => {
        let newState = { ...data };

        switch (action) {
            case 0:
                newState.currentPicture = newState.currentPicture - 1;

                if (newState.currentPicture < 0) {
                    newState.currentPicture = images.length - 1;
                }

                break;
            case 1:
                newState.currentPicture = newState.currentPicture + 1;

                if (newState.currentPicture > images.length - 1) {
                    newState.currentPicture = 0;
                }

                break;

            default:
                break;
        }

        setData(newState);
    };

    return (
        <div className="image-modal-global-container">
            <motion.button
                variants={modalCardAnimation}
                initial="background_hidden"
                animate="background_show"
                exit="background_hidden"
                className="image-modal-close-btn"
                onClick={() => handleOpenModal()}
            >
                <Cross />
            </motion.button>
            <motion.div
                variants={modalCardAnimation}
                initial="background_hidden"
                animate="background_show"
                exit="background_hidden"
                onClick={() => handleOpenModal()}
                className="image-modal-background"
            ></motion.div>
            <motion.div
                variants={modalCardAnimation}
                initial="modal_card_hidden"
                animate="modal_card_show"
                exit="modal_card_hidden"
                className="image-modal-card-container"
            >
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
                            <AnimatePresence key={i}>
                                {i === data.currentPicture && (
                                    <div className="image-modal-imgs-container">
                                        <motion.img
                                            variants={modalCardAnimation}
                                            initial="imgs_hidden"
                                            animate="imgs_show"
                                            exit="imgs_exit"
                                            className="image-modal-img-visibile"
                                            src={item}
                                        />
                                    </div>
                                )}
                            </AnimatePresence>
                        ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ImageModal;
